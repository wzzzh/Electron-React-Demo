const url = require('url')
const path = require('path')
const { app, Menu, BrowserWindow } = require('electron')
var winName = app.getName()
var winVersion = app.getVersion()
let munuItemTemplate = [
  {
    label: winName,
    submenu: [
      {
        label: `关于 ${winName}`,
        role: 'about',
        type: 'separator',
      },
      {
        label: `Version ${winVersion}`,
        enabled: false,
      },
      {
        label: '检查更新',
        click: () => {
          console.log('检查更新')
        },
      },
      {
        label: '服务',
        role: 'services',
        type: 'separator',
        submenu: [],
      },
      {
        label: `隐藏 ${winName}`,
        accelerator: 'Command+H',
        role: 'hide',
      },
      {
        label: '隐藏其它',
        accelerator: 'Command+Alt+H',
        role: 'hideothers',
      },
      {
        label: '显示全部',
        role: 'unhide',
      },
      {
        label: '退出',
        accelerator: 'Command+Q',
        click: () => {
          app.quit()
        },
      },
    ],
  },
  {
    label: '工具',
    submenu: [
      {
        label: '开发者工具',
        accelerator: (function () {
          if (process.platform === 'darwin') {
            return 'Alt+Command+I'
          } else {
            return 'Ctrl+Shift+I'
          }
        })(),
        click: function (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.toggleDevTools()
          }
        },
      },
    ],
  },
  {
    label: '查看',
    submenu: [
      {
        label: '重载',
        accelerator: 'CmdOrCtrl+R',
        click: function (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        },
      },
      {
        label: '全屏',
        accelerator: (() => {
          if (process.platform === 'darwin') return 'Ctrl+Command+F'
          else return 'F11'
        })(),
        click: (item, focusedWindow) => {
          if (focusedWindow)
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
        },
      },
    ],
  },
  {
    label: '窗口',
    role: 'window',
    submenu: [
      {
        label: '最小化',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize',
      },
      {
        label: '关闭',
        accelerator: 'CmdOrCtrl+W',
        role: 'close',
      },
    ],
  },
]
app.on('ready', function () {
  var menu = Menu.buildFromTemplate(munuItemTemplate)
  Menu.setApplicationMenu(menu)
})
