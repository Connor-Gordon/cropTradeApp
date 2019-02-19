import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/listActions';
import { Link } from 'react-router-dom'
import '../styles/homeStyles.css'

import '../styles/homeStyles.css'


class Home extends Component {
  componentDidMount() {
    getCategories()
  }
  
  render() {
    return (
      <div className='superCon'>

        <div className="mainCon" >
          <div className="searchOptions">
            <h2 id="homeH2">Category Search</h2>
            <h2 id="homeH2"><Link to={'/searchpage'}>Keyword Search</Link> </h2>
          </div>

          <div id="catCon">
            {this.props.categories.map(items=> (
              <div className="catdiv" key={items.id}>
                <Link to={`/posts/${items.slug}/${items.id}`}> 
                  <h2 className="catName">{items.name}</h2>
                </Link>
                <div>{items.subcat.map(allsubs => (
                  <Link className="subname" key={allsubs.id} to={`/${allsubs.slug}/${allsubs.id}`}> 
                    <div className="allsubs">{allsubs.name}</div>  
                  </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
 
  return {
   categories: appState.listingsReducer.categories
  }
}

export default connect(mapStateToProps)(Home)
