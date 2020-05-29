import React from 'react'
import { Button } from 'antd'
import { shell } from 'electron'
import './index.less'

const OutLink = (props) => {
  const { url, title } = props.outLinkOpt

  const handleLink = () => {
    shell.openExternal(url)
  }

  return (
    <div className='outlink-container'>
      <h1>
        <Button type='link' onClick={() => handleLink()}>
          {title}
        </Button>
      </h1>
    </div>
  )
}
export default OutLink
