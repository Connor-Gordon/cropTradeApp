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
import Profile from './Profile'
import Welcome from './Welcome'

// import { withAuth } from '../lib/auth';
import Chat from './Chat'
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Authentication redirectUrl="/login">
      <Provider store={store}>
        <Router>
          <div>              
            <Search />
            <Route exact path="/"  component={Welcome} />
            <Switch>

              <Route path="/Home" component={Home} />
              <Route path="/login" component={SignIn} />
              <Route path="/register" component={Register} />
              <Route path="/about" component={About} />
              <Route path="/chatroom/:receiver_id/:user_id" component={Chat} />
              <Route path="/post/:id"  component={Post} />
              <Route path="/posts/:slug/:id"  component={Scat} />
              <Route path="/form/:slug/:id" component={Form} />
              <Route path="/contactus"  component={ContactUs} />
              <Route path="/comingSoon" component={ComingSoon} />
              <Route path="/profile/:username" component={Profile} />
              <Route path="/:slug/:id"  component={List} /> 
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
      </Authentication>
    )
  }
}

export default App

