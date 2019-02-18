import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/listActions';
import { Link } from 'react-router-dom'

import '../styles/listStyles.css'



class List extends Component {
  state = {
    Main: true,
    Con: true,
    Div: true,
    Li: true,
    Image: true,
    Icon: "fa fa-th-large"
  }
  componentDidMount() {
    getPosts(this.props.match.params.slug, this.props.match.params.id)
  }
  
handleChange = e => {
  this.setState({
    Main: !this.state.Main,
    Con: !this.state.Con,
    Div: !this.state.Div,
    Li: !this.state.Li,
    Image: !this.state.Image,
    Icon: !this.state.Icon,
  })
}

  render() {
    let Main = this.state.Main ? "gridMain" : "listMain";
    let Con = this.state.Con ? "gridCon" : "listiCon";
    let Div = this.state.Div ? "grid" : "list";
    let Li = this.state.Li ? "gridLi" : "listLi";
    let Image = this.state.Image ? "gridImage" : "listImage";
    let Icon = this.state.Icon ? "fa fa-th-large" : "fa fa-bars";

    return (

      <div className="listCon ">
        <div className="bodyCon">
          <h1 className="catname">{this.props.match.params.slug}</h1> 
          <div className="postbodyCon">
                  <div className="addpostButtonCon"> 
                      <Link className="addpostButton" to={`/form/${this.props.match.params.slug}/${this.props.match.params.id}`}>Add a post to this category!</Link>
                  </div>
                  <div>
                    <button id="switchButton" onClick={this.handleChange}><i className={Icon}></i> Switch View</button>
                  </div>
          </div>
          <div className={Main}>
              <div className={Con}>
                  {this.props.posts.map(item => (
                    <div key={item.id} className={Div}>
                       <Link  className={Li} to={`/post/${item.id}`}> <img className={Image} src={item.photo} onError={(e)=>{e.target.onerror = null; e.target.src="https://cdn2.iconfinder.com/data/icons/orange-emoticon/512/Orange_Emoticon-03-512.png"}}/><p className="itemListName">{item.title} (Las Vegas)</p> </Link> 
                       


                    </div>
                  ))}
              </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
   posts: appState.listingsReducer.posts
  }
}

export default connect(mapStateToProps)(List)


