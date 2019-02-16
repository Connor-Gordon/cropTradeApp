import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearch } from '../actions/listActions';
import { withAuth, api} from '../lib/auth'


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
    
    // sets login/register buttons to toggle to display username/icons when signed in
    // tested w/o username by reversing if and else statements
    let loginButton = ""

    if (api.getProfile()){
        loginButton = <div>
                        <Link className="searchButton" to={`/inbox/:user_id`}><i className="fa fa-inbox"></i> </Link>
                        <Link className="searchButton" to={`/comingsoon`}><i className="fa fa-cog"></i> </Link>
                        <Link className="searchButton" to={`/profile/${api.getProfile().username}`}>{api.getProfile().username}</Link>
                        <Link className="searchButton" to={`/`}><div onClick={this.logout}> Log out</div></Link>
                        
                    </div>
    } else {
        loginButton = <div>
                        <Link className="searchButton" to={`/login`}>Log In</Link>
                        <Link className="searchButton" to={`/Register`}>Register</Link>
                    </div>
    }
    
    return (
      <div className='searchDiv'>
        
        <div>
        <form id="searchForm" onSubmit={this.handleSubmit}>
            <div ><Link id="cropTrade" to={`/`}>CropTrade</Link></div>
            <div id="iconDiv">
                <a target="blank"  className="icons" href="http://www.facebook.com"><i className="fa fa-facebook-square"></i></a> 
                <a target="blank"  className="icons" href="http://www.twitter.com"><i className="fa fa-twitter-square"></i></a> 
                <a target="blank"  className="icons" href="http://www.instagram.com"><i className="fa fa-instagram"></i></a>
            </div>
            <div>
                {/* value from input will go to the state above, and on any change, run the handleChange fn to change the state and run the getSearch fn */}
                <input className="search" type="text" placeholder="Search.." name="search" value={this.state.search} onChange={this.handleChange}/>
                <button className="searchButton" type="submit">Submit</button>
            </div>
            <div>
                {/* refers to if else statement above */}
                {loginButton}
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
