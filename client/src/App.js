import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import About from './components/About'
import Home from './components/Home'

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/about' render={(props) => (
            <About 
            />
          )}/>
           <Route exact path='/' render={(props) => (
            <Home
            />
          )}/>
        </Switch>
      </div>
    )
  }
}
