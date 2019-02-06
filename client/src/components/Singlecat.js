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
        <h1>{this.props.match.params.slug}</h1>
        <div>{this.props.scat.map(allposts => (
              <Link key={allposts.id} to={`/post/${allposts.id}`}><div> {allposts.title}</div> </Link>
            ))}
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  console.log(appState)
  return {
   scat: appState.listingsReducer.scat
  }
}

export default connect(mapStateToProps)(Post)




// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { getPost } from '../actions/listActions';

// import '../styles/postStyles.css'



// class Post extends Component {
//   componentDidMount() {
//     getPost(this.props.match.params.id)
//   }
  
//   render() {
//     return (
//       <div>
//         <div className="postCon">         
//           <div><h2>{this.props.post.title}</h2></div>
//           <button className="replybutton">reply</button>
//           <div>{this.props.post.description}</div>
//           <div><img alt="imagenotfound" className="photo" src={this.props.post.photo}/></div>
//         </div>
//         <div>
//         </div>
//       </div>
//     )
//   }
// }

// function mapStateToProps(appState) {
//   console.log(appState)
//   return {
//    post: appState.listingsReducer.post
//   }
// }

// export default connect(mapStateToProps)(Post)