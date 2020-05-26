const url = require('url')
const path = require('path')
const { ipcMain, BrowserWindow } = require('electron')
let noBarHtml = url.format({
  // 协议
  protocol: 'file',
  // 目录
  pathname: path.join(__dirname, '../static/noBarWindow.html'),
  slashes: true,
})

let noDragHtml = url.format({
  // 协议
  protocol: 'file',
  // 目录
  pathname: path.join(__dirname, '../static/noDragWindow.html'),
  slashes: true,
})

let transHtml = url.format({
  // 协议
  protocol: 'file',
  // 目录
  pathname: path.join(__dirname, '../static/transWindow.html'),
  slashes: true,
})

ipcMain.on('create-window', (event, data) => {
  let win = new BrowserWindow({
    width: 500,
    height: 400,
  })
  win.on('close', () => {
    win = null
  })
  win.loadURL('http://kaikeba.com')
})

ipcMain.on('create-no-bar-window', (event, data) => {
  let win = new BrowserWindow({
    width: 500,
    height: 400,
    frame: false,
  })
  win.on('close', () => {
    win = null
  })
  win.loadURL(noBarHtml)
  win.show()
})

ipcMain.on('create-bar-window', (event, data) => {
  const modalPath = path.join('file://', __dirname, '../static/newWindow.html')
  let win = new BrowserWindow({
    width: 500,
    height: 400,
  })
  win.on('close', () => {
    win = null
  })
  win.loadURL(modalPath)
  win.show()
})

ipcMain.on('create-no-drag-window', (event, data) => {
  let win = new BrowserWindow({
    width: 500,
    height: 400,
    frame: false,
    movable: false,
  })
  win.on('close', () => {
    win = null
  })
  win.loadURL(noDragHtml)
  win.show()
})

ipcMain.on('create-trans-window', (event, data) => {
  let win = new BrowserWindow({
    width: 500,
    height: 400,
    frame: false,
    transparent: true,
  })
  win.on('close', () => {
    win = null
  })
  win.loadURL(transHtml)
  win.show()
})
