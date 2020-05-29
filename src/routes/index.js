import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ProWindow from '../pages/ProWindow'
import ProMenu from '../pages/ProMenu'
import ProDialog from '../pages/ProDialog'
import ProIPC from '../pages/IPC'
import ProSystem from '../pages/System'
import ProShell from '../pages/ProShell'
import TodoList from '../pages/TodoList'
export default () => (
  <Switch>
    <Route path='/' render={() => <Redirect to='/ipc' />} exact key='first' />
    <Route path='/ipc' component={ProIPC} key='ipc' exact />
    <Route path='/window' component={ProWindow} key='window' exact />
    <Route path='/dialog' component={ProDialog} key='dialog' exact />
    <Route path='/menu' component={ProMenu} key='menu' exact />
    <Route path='/system' component={ProSystem} key='system' exact />
    <Route path='/shell' component={ProShell} key='shell' exact />
    <Route path='/todolist' component={TodoList} key='todolist' exact />
  </Switch>
)
