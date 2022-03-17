import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './HomePage'
import PageNotFound from './404'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} /> 
        <Route path='*' component={PageNotFound} /> 
      </Switch>
    </Router>
  )
}
