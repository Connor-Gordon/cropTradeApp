import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/listActions';
import { Link } from 'react-router-dom'

import '../styles/listStyles.css'
import Footer from './Footer'


class List extends Component {
  componentDidMount() {
    getPosts(this.props.match.params.slug, this.props.match.params.id)
  }
  
  render() {
    return (
      <div className="listCon">
        <div className="bodyCon">
          <h1>Crop Trade App</h1>
          <h1 className="catname">{this.props.match.params.slug}</h1> 
          <div className="bodyCon">
              <input className="listsearchbar" type="text" name="searchbar" placeholder="search" />
              
                  <div className="addpostButton"> 
                      <Link className="addpostButton" to={`/form/${this.props.match.params.slug}/${this.props.match.params.id}`}>Add Post</Link>
                  </div>
          </div>
          <div className="gridMain">
              <div className="gridCon">
                  {this.props.posts.map(item => (
                    <div className="grid">
                      
                       <Link key={item.id} className="postLi" to={`/post/${item.id}`}> <img className="gridimage" src={item.photo}/><p>{item.title} (Las Vegas)</p> </Link> 
                    
                    </div>
                  ))}
              </div>
          </div>
        </div>
        <div>
        <Footer /> 
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


