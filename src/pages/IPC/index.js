import React, { useState, useEffect } from 'react'
import { Button, Alert } from 'antd'
import { ipcRenderer } from 'electron'
import OutLink from 'components/OutLink'
import './index.less'
const Ipc = () => {
  const [messageAsync, setMessageAsync] = useState('')
  const [messageSync, setMessageSync] = useState('')
  const [moreMessageSync, setMoreMessageSync] = useState('')
  useEffect(() => {
    ipcRenderer.on('receive-main-async-msg', (event, msg) => {
      setMessageAsync(msg)
    })
    ipcRenderer.on('receive-more-msg', (event, msg) => {
      setMoreMessageSync(msg)
    })
  }, [])

  const outLinkOpt = {
    url: 'https://www.w3cschool.cn/electronmanual/electronmanual-ipc-main.html',
    title: 'IPC',
  }

  const handleIpcAsync = () => {
    ipcRenderer.send('send-async-message', '我发送异步消息')
  }
  const handleIpcSync = () => {
    let msg = ipcRenderer.sendSync('send-sync-message', '我发送同步消息')
    console.log(msg)
    setMessageSync(msg)
  }

  const handleStartIpc = () => {
    ipcRenderer.send('start-msg', '开始发送')
  }
  const handleEndIpc = () => {
    ipcRenderer.send('end-msg', '结束发送')
  }

  return (
    <div className='ipc-container'>
      <OutLink outLinkOpt={outLinkOpt}></OutLink>
      <div className='ipc-conetnet-container'>
        <section className='content-margin'>
          <Alert
            message='点击按钮-向主进程发送异步消息'
            type='info'
            className='content-margin'
          ></Alert>
          <Button onClick={() => handleIpcAsync()} className='content-margin'>
            发送异步消息给主进程
          </Button>
          <Alert
            description=''
            message={'主进程接收到的消息：' + messageAsync}
            type='success'
            className='content-margin'
          ></Alert>
        </section>
        <section className='content-margin'>
          <Alert
            message='点击按钮-向主进程发送同步消息'
            type='info'
            className='content-margin'
          ></Alert>
          <Button onClick={() => handleIpcSync()} className='content-margin'>
            发送同步消息给主进程
          </Button>
          <Alert
            description=''
            message={'主进程接收到的消息：' + messageSync}
            type='success'
            className='content-margin'
          ></Alert>
        </section>
        <section className='content-margin'>
          <Alert
            message='点击按钮-向主进程发送消息炮弹'
            type='info'
            className='content-margin'
          ></Alert>
          <Button
            onClick={() => handleStartIpc()}
            className='content-margin-right'
          >
            开始发送
          </Button>
          <Button onClick={() => handleEndIpc()} className='content-margin'>
            结束发送
          </Button>
          <Alert
            description=''
            message={'主进程接收到的消息：' + moreMessageSync}
            type='success'
            className='content-margin'
          ></Alert>
        </section>
      </div>
    </div>
  )
}
export default Ipc
