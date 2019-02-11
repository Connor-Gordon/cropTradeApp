import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearch } from '../actions/listActions';

import { Link } from 'react-router-dom'
import '../styles/searchStyles.css'

class Search extends Component {
// setting up state so search bar value has something to store too
// using state so its locally scoped to component and doesnt mess with anything else
  state = {
      search: ''
  }

  
  // Prevents refreshing automatically
  // Pull the getSearch fn from the actions and pass it the value from the search input,
  // getSearch does axios call to '/search/' + the searchResults passed to it and dispatches the action GET_SEARCH

  handleSubmit = e => {
      e.preventDefault()
          getSearch(this.state.search)
          this.setState({
              search: ""
          })
  }

  // on change, set search(from state) to the value of whatever is put in the input element(based on name element)
  handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  render() {
    // filter through the searchResults array, only display the ones with an index
    let filteredSearchResults = this.props.searchResults.filter(
        (searchResult) => {
            return searchResult.title.indexOf(this.state.search) !== -1
        }
    )
    return (
      <div className='searchDiv'>
        <div>
        <form className="searchForm" onSubmit={this.handleSubmit}>
            {/* value from input will go to the state above, and on any change, run the handleChange fn to change the state and run the getSearch fn */}
            <input className="search" type="text" placeholder="Search.." name="search" value={this.state.search} onChange={this.handleChange}/>
            <button className="searchButton" type="submit">Submit</button>
            <div>
                {/* insert if statement here, if user is logged in, display username w/link to profile
                    if no username, link to sign in page */}
                <Link to={`/signin`}>Log In</Link>
            </div>
        </form>
        
        </div>
        <div className="searchDisplay">
            <ul className="searchUL">
                {filteredSearchResults.map(searchResult => (
                    <li className="searchItems" key={searchResult + searchResult.id}>
                        <Link className="searchLink" to={`/post/${searchResult.id}`}>
                        <p className="searchP">{searchResult.title}</p>
                        <p>{searchResult.zipcode}</p>
                        <img alt="NoFuckingPicture" className="searchPhoto" src={searchResult.photo}></img>
                        </Link>
                    </li>
                
            ))}
            </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    searchResults: appState.listingsReducer.searchResults,
    username: appState.usersReducer.username
  }
}
export default connect(mapStateToProps)(Search)
