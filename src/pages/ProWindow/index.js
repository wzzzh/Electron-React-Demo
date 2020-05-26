import React from 'react'
import { Button, Alert } from 'antd'
import electron from 'electron'
import s from './index.module.less'
const { ipcRenderer, shell } = electron
console.log(s)
const ProWindow = () => {
  const createWindow = () => {
    ipcRenderer.send('create-window')
  }
  const createNoBarWindow = () => {
    ipcRenderer.send('create-no-bar-window')
  }
  const createBarWindow = () => {
    ipcRenderer.send('create-bar-window')
  }
  const createDragWindow = () => {
    ipcRenderer.send('create-no-drag-window')
  }
  const createTransWindow = () => {
    ipcRenderer.send('create-trans-window')
  }
  const handleLink = () => {
    let url =
      'https://www.w3cschool.cn/electronmanual/electronmanual-browser-window.html'
    shell.openExternal(url)
  }
  return (
    <div className={s['window-container']}>
      <h1>
        <Button type='link' onClick={() => handleLink()}>
          BrowserWindow
        </Button>
      </h1>
      <div className={s['content-margin']}>
        <Alert
          message='点击按钮打开一个普通窗口'
          type='info'
          className={s['content-margin']}
        ></Alert>
        <Button onClick={() => createWindow()}>打开窗口</Button>
      </div>
      <div className={s['content-margin']}>
        <Alert
          message='点击按钮打开一个无框窗口'
          type='success'
          className={s['content-margin']}
        ></Alert>
        <Button onClick={() => createNoBarWindow()}>打开窗口</Button>
      </div>
      <div className={s['content-margin']}>
        <Alert
          message='点击按钮打开一个带有状态的无框窗口'
          type='warning'
          className={s['content-margin']}
        ></Alert>
        <Button onClick={() => createBarWindow()}>打开窗口</Button>
      </div>
      <div className={s['content-margin']}>
        <Alert
          message='点击按钮打开一个带有状态、不可拖动的窗口'
          type='error'
          className={s['content-margin']}
        ></Alert>
        <Button onClick={() => createDragWindow()}>打开窗口</Button>
      </div>
      <div className={s['content-margin']}>
        <Alert
          message='点击按钮打开一个透明窗口'
          type='info'
          className={s['content-margin']}
        ></Alert>
        <Button onClick={() => createTransWindow()}>打开窗口</Button>
      </div>
    </div>
  )
}
export default ProWindow
