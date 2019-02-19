import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getsingleCat } from '../actions/listActions';
import { Link } from 'react-router-dom'
import '../styles/postStyles.css'



class Post extends Component {
  componentDidMount() {
    getsingleCat(this.props.match.params.slug, this.props.match.params.id)
  }
  
  render() {
    return (
      <div className="listCon">
        <div className="postCon">         
          <h1 id="singleCat">{this.props.match.params.slug}</h1>
          <div className="postDiv">{this.props.scat.map(allposts => (
                <Link key={allposts.id} to={`/post/${allposts.id}`}><div> {allposts.title}</div> </Link>
              ))}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
   scat: appState.listingsReducer.scat
  }
}

export default connect(mapStateToProps)(Post)
