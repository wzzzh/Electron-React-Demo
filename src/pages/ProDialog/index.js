import React, { useState } from 'react'
import { Button, Alert, message } from 'antd'
import { remote } from 'electron'
import OutLink from 'components/OutLink'
import './index.less'

const ProDialog = () => {
  const { dialog } = remote
  const [filePath, setFilePath] = useState('')
  const [savePath, setSaveFilePath] = useState('')

  const outLinkOpt = {
    // url: 'https://www.w3cschool.cn/electronmanual/electronmanual-dialog.html',
    url: 'https://www.electronjs.org/docs/api/dialog',
    title: 'Dialog',
  }
  const onOpenDialog = (type) => {
    switch (type) {
      case 'file':
        let fileOpt = {
          // openFile, openDirectory  用于打开目录
          // multiSelections 支持多选
          // createDirectory  支持新建文件夹
          properties: ['openDirectory', 'openFile'],
          // 过滤可选类型
          // filters: [
          //   { name: 'Images', extensions: ['jpg', 'gif'] },
          //   { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
          //   { name: 'Custom File Type', extensions: ['as'] },
          //   { name: 'All Files', extensions: ['*'] },
          // ],
        }
        dialog
          .showOpenDialog(fileOpt)
          .then((res) => {
            const { canceled, filePaths } = res
            if (canceled) {
              message.warning('点击了取消按钮')
            } else {
              setFilePath(filePaths)
            }
          })
          .catch((err) => {
            console.log(err)
          })
        break
      case 'save':
        dialog
          .showSaveDialog({
            title: '保存为：',
            // defaultPath: '未命名',
          })
          .then((res) => {
            const { defaultPath } = res
            setSaveFilePath(defaultPath)
          })
        break
      case 'message':
        let messageOpt = {
          title: '消息提示框',
          type: 'info',
          message: '这是一条提示消息',
          // checkboxLabel: '是',
          // checkboxChecked: true,
          buttons: ['确定', '取消'],
        }
        dialog
          .showMessageBox(messageOpt)
          .then((res) => {})
          .catch((err) => {})
        break
      case 'error':
        const errorTitle = '错误提示'
        const errorContent = '这是一个错误提示框'
        dialog.showErrorBox(errorTitle, errorContent)
        break
      case 'warning':
        let warningOpt = {
          title: '信息框标题',
          body: '我是一条信息～～～',
        }
        let myNotification = new window.Notification(
          warningOpt.title,
          warningOpt
        )
        console.log(myNotification, '当前信息')
        break
      default:
        break
    }
  }
  return (
    <div className='dialog-container'>
      <OutLink outLinkOpt={outLinkOpt}></OutLink>
      <div className='dialog-content-container'>
        <section className='content-margin'>
          <Alert
            message={`点击按钮-打开一个选择文件弹框,【当前选择路径：${filePath}】`}
            type='info'
            className='content-margin'
          />
          <Button
            onClick={() => {
              onOpenDialog('file')
            }}
            className='content-margin'
          >
            打开系统弹框
          </Button>
        </section>
        <section className='content-margin'>
          <Alert
            message={`点击按钮-打开一个保存文件框,【当前保存地址：${savePath}】`}
            type='success'
            className='content-margin'
          />
          <Button
            onClick={() => {
              onOpenDialog('save')
            }}
            className='content-margin'
          >
            打开保存弹框
          </Button>
        </section>
        <section className='content-margin'>
          <Alert
            message={`点击按钮-打开一个消息文件框`}
            type='success'
            className='content-margin'
          />
          <Button
            onClick={() => {
              onOpenDialog('message')
            }}
            className='content-margin'
          >
            打开消息弹框
          </Button>
        </section>
        <section className='content-margin'>
          <Alert
            message={`点击按钮-打开一个错误提示框`}
            type='error'
            className='content-margin'
          />
          <Button
            onClick={() => {
              onOpenDialog('error')
            }}
            className='content-margin'
          >
            打开错误弹框
          </Button>
        </section>
        <section className='content-margin'>
          <Alert
            message={`点击按钮-打开一个信息提示框`}
            type='warning'
            className='content-margin'
          />
          <Button
            onClick={() => {
              onOpenDialog('warning')
            }}
            className='content-margin'
          >
            打开提示框
          </Button>
        </section>
      </div>
    </div>
  )
}
export default ProDialog
