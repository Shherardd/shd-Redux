import React from 'react'
import Usuarios from '../components/Usuarios'
import Menu from '../components/Menu'
import Theme from '../components/Theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  
  return (
    <Router>
      <Menu/>
        <Switch>
          <Route exact path='/' component={ Usuarios }/>
          <Route exact path = '/theme' component={ Theme }/>
          <Route component={ () => <h1>404</h1> }/>
        </Switch>
    </Router>
  )
}

export default App
