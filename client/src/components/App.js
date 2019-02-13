import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import store from '../store'
import { Authentication } from '../lib/auth'




import Home from './Home'
import List from './List'
import Post from './Post'
import Scat from './Singlecat'
import Form from './Form'
import About from './About'
import Search from './Search'
import SignIn from './SignIn'
import Register from './Register'
import ComingSoon from './ComingSoon'
import ContactUs from './ContactUs'

// import { withAuth } from '../lib/auth';
import Chat from './Chat'

class App extends Component {
  render() {
    return (
      <Authentication redirectUrl="/login">
      <Provider store={store}>
        <Router>
          <div>
            <Search />
            
            <Switch>
              <Route path="/login" component={SignIn} />
              <Route path="/register" component={Register} />
              <Route exact path="/"  component={Home} />
              <Route path="/about" component={About} />
              <Route path="/chatroom" component={Chat} />
              <Route path="/posts/:slug/:id"  component={Scat} />
              <Route path="/contactus"  component={ContactUs} />
              <Route path="/comingSoon" component={ComingSoon} />
              <Route path="/post/:id"  component={Post} />
              <Route path="/form/:slug/:id" component={Form} />
              <Route path="/:slug/:id"  component={List} /> 
            </Switch>
          </div>
        </Router>
      </Provider>
      </Authentication>
    )
  }
}

export default App

