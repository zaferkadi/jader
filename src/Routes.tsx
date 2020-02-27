import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Offers from './Pages/Offers'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Offers} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
