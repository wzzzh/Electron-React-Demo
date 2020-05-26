import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import ProWindow from '../pages/ProWindow'
import ProMenu from '../pages/ProMenu'
const MainRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path='/'
        render={() => <Redirect to='/window' />}
        exact
        key='first'
      />
      <Route path='/window' component={ProWindow} key='window' exact />
      <Route path='/menu' component={ProMenu} key='menu' exact />
    </Switch>
  </BrowserRouter>
)
export default MainRouter
