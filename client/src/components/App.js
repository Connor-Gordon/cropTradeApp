import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import store from '../store'

import Home from './Home'
import List from './List'
import Post from './Post'
import Scat from './Singlecat'
import Form from './Form'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              
              <Route exact path="/"  component={Home} />
              <Route  path="/post/:id"  component={Post} />
              <Route  path="/posts/:slug/:id"  component={Scat} />
              <Route path="/form/:slug/:id" component={Form} />
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
