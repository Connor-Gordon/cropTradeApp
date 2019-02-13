import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { decode } from 'jsonwebtoken'

// just a class, not a component
class AuthService {
  constructor(config = {}) {
    // where should domain go
    this.domain = config.domain || '/api'
    // what path am i supposed to call api, /api/login
    this.authPath = config.authPath || 'login'
  }


  // assign token when logging in
  // login method takes username and pw
  // all fetches from then on will us token to call api
  login = (username, password) => {
    // uses fetch (like native ajax call) to pass info
    return this.fetch(`${this.domain}/${this.authPath}`, {
      method: 'POST',
      body: JSON.stringify({
        username, password
      })
      // then use setToken and return the result
    }).then(res => {
      this.setToken(res.token)
      return Promise.resolve(res)
    })
  }

  // removes token from localStorage in browser
  logout = () => {
    localStorage.removeItem('authtoken')
  }

  // checks whether user is logged in
  loggedIn = () => {
    // grab token
    const token = this.getToken()
    // return token is there and is not expired
    return !!token 
    // && !this.isTokenExpired(token)
  }

  //checks if token is expired
  isTokenExpired = (token) => {
    try {
      const decoded = decode(token)
      return decoded.exp < Date.now() / 1000
    } catch (err) {
      return false
    }
  }

  // putting token in localStorage in browser and calling authtoken
  setToken = (token) => {
    localStorage.setItem('authtoken', token)
  }

  // grabs token from local storage
  getToken = () => {
    return localStorage.getItem('authtoken')
  }

  // gets info from token
  getProfile = () => {
    return decode(this.getToken())
  }


  get = (url) => {
    return this.fetch(url, {
      method: 'GET'
    })
    .then(resp => resp.json())
  }

  put = (url, data) => {
    return this.fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
  } 

  post = (url, data) => {
    return this.fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
  }

  patch = (url, data) => {
    return this.fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
  }

  delete = (url) => {
    return this.fetch(url, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
  }

  fetch = (url, options) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
// if they are logged in, add authorization header, bearer + token
    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers,
      // options are things that methods above returns
      ...options
    })
    .then(this._checkStatus)
    .then(response => response.json())
  }

  _checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      const error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
}







export const api = new AuthService()

const AuthContext = React.createContext({
  isAuthenticated: false,
  redirectUrl: '/login',
  defaultRedirect: '/'
})

export class Authentication extends Component {
  state = {
    isAuthenticated: api.loggedIn()
  }

  static defaultProps = {
    redirectUrl: '/login',
    defaultRedirect: '/'
  }

  signin = (username, password) => {
    var promise = new Promise((resolve, reject) => {
      api.login(username, password)
      .then(data => {
        this.setState({
          isAuthenticated: true
        })
        resolve()
      }).catch(err => {
        console.log("Error!", err)
      })
    })

    return promise
  }

  signout = () => {
    var promise = new Promise((resolve, reject) => {
      api.logout()
      this.setState({ isAuthenticated: false })
      resolve()
    })

    return promise
  }

  render() {
    const value = {
      isAuthenticated: this.state.isAuthenticated,
      redirectUrl: this.props.redirectUrl,
      signin: this.signin,
      signout: this.signout
    }

    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const AuthRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    { ({ isAuthenticated, redirectUrl }) => (
      <Route {...rest} render={(props) => (
        isAuthenticated 
        ? <Component {...props} />
        : <Redirect to={{
            pathname: redirectUrl,
            state: { from: props.location }
          }}/>
        )
      }/>
    )}
  </AuthContext.Consumer>
)

export function withAuth(Component) {
  return props => (
    <AuthContext.Consumer>
      {context => (
        <Component {...context} {...props} />
      )}
    </AuthContext.Consumer>
  )
}

