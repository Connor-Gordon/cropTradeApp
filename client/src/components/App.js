import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import store from '../store'
import { Authentication, AuthRoute } from '../lib/auth'


import Home from './Home'
import List from './List'
import Post from './Post'
import Scat from './Singlecat'
import Form from './Form'
import About from './About'
import Search from './Search'
import SignIn from './SignIn'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Search />
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route exact path="/"  component={Home} />
              <Route path="/about" component={About} />
              <Route  path="/post/:id"  component={Post} />
              <Route  path="/posts/:slug/:id"  component={Scat} />
              <Authentication redirectUrl="/signin">
                <Route path="/form/:slug/:id" component={Form} />
              </Authentication>
              <Route  path="/:slug/:id"  component={List} /> 
              
            </Switch>
            
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

//<Route  exact path="/"  component={Signin} />
