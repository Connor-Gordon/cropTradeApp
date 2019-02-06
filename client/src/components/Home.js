import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/listActions';
import { Link } from 'react-router-dom'

import Footer from './Footer'
import '../styles/homeStyles.css'

class Home extends Component {
  componentDidMount() {
    getCategories()
  }
  
  render() {
    return (
      <div className='superCon'>
        <div className="mainCon" >
          <div className="appTitle"><h2 className="CropTradeApp">Crop Trade App</h2></div>
          <div id="catCon">
            {this.props.categories.map(items=> (
            <div key={items.id}>
            <Link to={`/posts/${items.slug}/${items.id}`}> <h3 className="catName">{items.name}</h3></Link>
              <div>{items.subcat.map(allsubs => (
                <Link key={allsubs.id} to={`/${allsubs.slug}/${allsubs.id}`}> <div className="allsubs">{allsubs.name}</div> </Link>
              ))}
              </div>
            </div>
            ))}
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
  console.log(appState)
  return {
   categories: appState.listingsReducer.categories
  }
}

export default connect(mapStateToProps)(Home)
