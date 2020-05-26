const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const glob = require('glob')
const debug = /--debug/.test(process.argv[2])
// console.log(app)
let mainWindow
function initialize() {
  makeSingleInstance()
  loadMainProcess()
  // Electron 会在初始化后并准备
  // 创建浏览器窗口时，调用这个函数。
  // 部分 API 在 ready 事件触发后才能使用。
  app.on('ready', () => {
    createWindow()
  })

  // 当全部窗口关闭时退出。
  app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (mainWindow === null) {
      createWindow()
    }
  })
}
function createWindow() {
  // 创建浏览器窗口。
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  // 然后加载应用的 index.html。  url 及本地文件形式
  mainWindow.loadURL('http://localhost:3003')
  // win.loadFile('public/index.html')
  //如果想要让electron加载本地打包好的React文件的build文件下的内容是这样子的：(这个问题困扰我很久，解决了。分享下2019-4-29添加)
  // win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)

  // 打开开发者工具
  mainWindow.webContents.openDevTools()

  // 当 window 被关闭，这个事件会被触发。
  mainWindow.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    mainWindow = null
  })
}

// 创建一个单例应用并聚焦
function makeSingleInstance() {
  if (process.mas) return

  app.requestSingleInstanceLock()

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}
function loadMainProcess() {
  const files = glob.sync(path.join(__dirname, 'main-process/**/*.js'))
  files.forEach((file) => {
    require(file)
  })
}
initialize()
