import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/listActions';
import { Link } from 'react-router-dom'

import '../styles/homeStyles.css'

class Home extends Component {
  componentDidMount() {
    getCategories()
  }
  
  render() {
    return (
      <div className='superCon'>

        <div className="mainCon" >

          <div className="appTitle">
            <h2 className="CropTradeApp">Crop Trade App</h2>
          </div>
          <div id="catCon">
            {this.props.categories.map(items=> (
            <div className="catdiv" key={items.id}>
              <Link to={`/posts/${items.slug}/${items.id}`}> <h2 className="catName">{items.name}</h2></Link>
              <div>{items.subcat.map(allsubs => (
                  <Link className="subname" key={allsubs.id} to={`/${allsubs.slug}/${allsubs.id}`}> <div className="allsubs">{allsubs.name}</div> </Link>
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
  console.log(appState)
  return {
   categories: appState.listingsReducer.categories
  }
}

export default connect(mapStateToProps)(Home)
