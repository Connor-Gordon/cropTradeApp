import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearch } from '../actions/listActions';
import '../styles/searchStyles.css'
import SearchResults from './SearchResults'


class Search extends Component {
// setting up state so search bar value has something to store too
// using state so its locally scoped to component and doesnt mess with anything else
  state = {
      search: ''
  }

  

// just prevents refreshing automatically
  handleSubmit = e => {
      e.preventDefault()
  }

  // on change, set search(from state) to the value of whatever is put in the input element
  handleChange = e => {
      this.setState({
          [e.target.search]: e.target.value
      })
  // Pull the getSearch fn from the actions and pass it the value from the search input,
  // getSearch does axios call to '/search/' + the searchResults passed to it and dispatches the action GET_SEARCH
    getSearch(this.state.search)
  }

  render() {
    // filter through the searchResults array
    let filteredSearchResults = this.props.searchResults.filter(
        (result) => {
            return result.title.toLowerCase().indexOf(this.state.search).toLowerCase() !==-1;
        }
    )
    return (
      <div className='search'>
        <form onSubmit={this.handleSubmit}>
        {/* value from input will go to the state above, and on any change, run the handleChange fn to change the state and run the getSearch fn */}
            <input type="text" placeholder="Search.." name="search" value={this.state.search} onChange={this.handleChange}/>
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
        {/* creat a new array from the */}
        <ul>
            {filteredSearchResults.map((result)=> {
                return <SearchResults result={result} key={result.id}/>
            })}
        </ul>

      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    searchResults: appState.listingsReducer.searchResults
  }
}
export default connect(mapStateToProps)(Search)
