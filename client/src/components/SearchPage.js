import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearch } from '../actions/listActions';
import { withAuth} from '../lib/auth'


import { Link } from 'react-router-dom'
import '../styles/searchStyles.css'


class Search extends Component {
// setting up state so search bar value has something to store too
// using state so its locally scoped to component and doesnt mess with anything else
  state = {
      search: ''
  }

  componentDidMount(){

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

  logout = e => {
      this.props.signout()
  }

  render() {
    // filter through the searchResults array, only display the ones with an index
    let filteredSearchResults = this.props.searchResults.filter(
        (searchResult) => {
            return searchResult.title.indexOf(this.state.search) !== -1
        }
    )

    return (
        <div>
            <div>
                <h2 id="searchH2"><Link to={'/home'}>Search By Categories</Link> </h2>
            </div>
            <div className='searchDiv2'>        
                <div>
                <form id="searchForm" onSubmit={this.handleSubmit}>
                    <div>
                        {/* value from input will go to the state above, and on any change, run the handleChange fn to change the state and run the getSearch fn */}
                        <input className="search" autoComplete="off" type="text" placeholder="Search.." name="search" value={this.state.search} onChange={this.handleChange}/>
                        <button id="sButton" className="searchButton" type="submit">Submit</button>
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
                                <img alt="NoPic" className="searchPhoto" src={searchResult.photo}></img>
                                </Link>
                            </li>
                        
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
  }
}

function mapStateToProps(appState) {
    console.log(appState)
  return {
    searchResults: appState.listingsReducer.searchResults,
    token: appState.chatReducer.token
  }
}
export default withAuth(connect(mapStateToProps)(Search))
