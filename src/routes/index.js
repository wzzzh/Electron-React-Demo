import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ProWindow from '../pages/ProWindow'
import ProMenu from '../pages/ProMenu'
import ProDialog from '../pages/ProDialog'
export default () => (
  <Switch>
    <Route
      path='/'
      render={() => <Redirect to='/dialog' />}
      exact
      key='first'
    />
    <Route path='/window' component={ProWindow} key='window' exact />
    <Route path='/dialog' component={ProDialog} key='dialog' exact />
    <Route path='/menu' component={ProMenu} key='menu' exact />
  </Switch>
)
