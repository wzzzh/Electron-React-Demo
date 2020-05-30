import React, { useState } from 'react'
import OutLink from 'components/OutLink'
import { Alert, Button, Input } from 'antd'
import os from 'os'
import fs from 'fs'
import path from 'path'
import electron, { Cookies } from 'electron'
import './index.less'
const { remote, clipboard, desktopCapturer, shell } = electron
const { screen } = remote
const System = () => {
  const { app } = remote
  const [appPath, setAppPath] = useState('')
  const [appVersion, setAppVersion] = useState('')
  const [systemPath, setSystemPath] = useState('')
  const [intpuValue, setInputValue] = useState('123')
  const [copyVal, setCopyVal] = useState('')
  const [paseVal, setPaseVal] = useState('')
  const [screenImgPath, setScreenImgPath] = useState('')

  const outLinkOpt = {
    url: 'https://www.electronjs.org/docs/api/menu',
    title: 'System',
  }

  const getAppPath = () => {
    let appPath = app.getAppPath()
    setAppPath(appPath)
  }

  const getAppVerion = () => {
    let obj = {
      ...process.versions,
    }
    console.log(obj)
    let appVersion = app.getVersion()
    setAppVersion(appVersion)
  }

  const getSystemPath = () => {
    let systemPath = os.homedir()
    setSystemPath(systemPath)
  }

  const onHandleChange = (event) => {
    setInputValue(event.target.value)
  }

  const onCopyText = () => {
    clipboard.writeText(intpuValue)
    setCopyVal(copyVal)
  }

  const onPaseText = () => {
    setPaseVal(clipboard.readText())
  }
  const determineScreenShotSize = () => {
    const screenSize = screen.getPrimaryDisplay().workAreaSize
    const maxDimension = Math.max(screenSize.width, screenSize.height)
    return {
      width: maxDimension * window.devicePixelRatio,
      height: maxDimension * window.devicePixelRatio,
    }
  }
  const getScreenmPath = () => {
    setScreenImgPath('正在截取屏幕...')
    const thumbSize = determineScreenShotSize()
    let options = { types: ['screen'], thumbnailSize: thumbSize }
    desktopCapturer.getSources(options).then((sources) => {
      sources.forEach((source) => {
        if (source.name === 'Entire screen' || source.name === 'Screen 1') {
          const screenshotPath = path.join(
            '/Users/kkb/Downloads',
            'screenshot.png'
          )
          fs.writeFile(screenshotPath, source.thumbnail.toPNG(), (error) => {
            if (error) return console.log(error)
            shell.openExternal(`file://${screenshotPath}`)
            setScreenImgPath(screenshotPath)
          })
        }
      })
    })
  }

  return (
    <div className='menu-container'>
      <OutLink outLinkOpt={outLinkOpt}></OutLink>
      <div className='system-content-container'>
        <section className='content-margin'>
          <Alert
            message={`点击按钮-获取当前应用路径,【当前路径为：${appPath}】`}
            type='info'
            className='content-margin'
          ></Alert>
          <Button onClick={() => getAppPath()}>获取app路径</Button>
        </section>
        <section className='content-margin'>
          <Alert
            message={`点击按钮-获取当前应用版本,【当前版本为：${appVersion}】`}
            type='success'
            className='content-margin'
          ></Alert>
          <Button onClick={() => getAppVerion()}>获取版本信息</Button>
        </section>
        <section className='content-margin'>
          <Alert
            message={`点击按钮-获取当前系统主目录,【当前主目录为：${systemPath}】`}
            type='success'
            className='content-margin'
          ></Alert>
          <Button onClick={() => getSystemPath()}>获取app版本</Button>
        </section>
        <section className='content-margin'>
          <Input
            value={intpuValue}
            style={{ width: '200px', marginRight: '10px' }}
            onChange={(event) => onHandleChange(event)}
          ></Input>
          <Button onClick={() => onCopyText()} size='mini'>
            复制
          </Button>
        </section>
        <section className='content-margin'>
          <Button onClick={() => onPaseText()} size='mini'>
            粘贴
          </Button>
          <span style={{ marginLeft: '4px' }}>{paseVal}</span>
        </section>
        <section className='content-margin'>
          <Alert
            message={`点击按钮-获取屏幕截图,【当前截图地址为：${screenImgPath}】`}
            type='success'
            className='content-margin'
          ></Alert>
          <Button onClick={() => getScreenmPath()}>获取当前屏幕截图</Button>
        </section>
      </div>
    </div>
  )
}
export default System
