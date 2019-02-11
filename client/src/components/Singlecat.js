import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getsingleCat } from '../actions/listActions';
import { Link } from 'react-router-dom'
import '../styles/postStyles.css'

import Footer from './Footer'


class Post extends Component {
  componentDidMount() {
    getsingleCat(this.props.match.params.slug, this.props.match.params.id)
  }
  
  render() {
    return (
      <div className="listCon">
        <div className="postCon">         
        <h1>{this.props.match.params.slug}</h1>
        <div>{this.props.scat.map(allposts => (
              <Link key={allposts.id} to={`/post/${allposts.id}`}><div> {allposts.title}</div> </Link>
            ))}
            </div>
        </div>
        <Footer />
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