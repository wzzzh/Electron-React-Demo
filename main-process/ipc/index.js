const { ipcMain, BrowserWindow } = require('electron')

ipcMain.on('send-async-message', (event, data) => {
  event.sender.send('receive-main-async-msg', '我是接收到【异步】消息做的回应')
})

ipcMain.on('send-sync-message', (event, data) => {
  event.returnValue = '我是接收到【同步】消息做的回应'
})
console.log(global.mainId)
let num = 0
// const mainWindow = BrowserWindow.fromId(global.mainId)
// ipcMain.on('start-msg', (event, data) => {
//   global.sendMsg = true
// })
// ipcMain.on('end-msg', (event, data) => {
//   global.sendMsg = false
// })
// setInterval(() => {
//   if (global.sendMsg) {
//     mainWindow.webContents.send('receive-more-msg', `Biu~Biu~${num}`)
//   }
// }, 300)
