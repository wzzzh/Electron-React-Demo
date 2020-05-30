import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

import './index.less'
const menuList = [
  {
    title: '进程通信',
    url: '/ipc',
  },
  {
    title: '窗口管理',
    url: '/window',
  },
  {
    title: '系统弹框',
    url: '/dialog',
  },
  {
    title: '系统菜单',
    url: '/menu',
  },
  {
    title: '系统操作',
    url: '/system',
  },
  {
    title: 'Shell',
    url: '/shell',
  },
  {
    title: 'Todolist',
    url: '/todolist',
  },
]
const Sidebar = (props) => {
  const [defaultKey, setDefaultKey] = useState([''])
  useEffect(() => {
    let pathName = window.location.pathname
    let current = menuList.filter((e) => e.url === pathName)
    let currentKey = current[0]['title']
    setDefaultKey([currentKey])
  }, [])

  const handleClick = (e) => {
    setDefaultKey([e.title])
  }
  return (
    <div className='siderbar-container'>
      <div className='side-top'>
        <span>Electron React Demo</span>
      </div>
      <Menu
        style={{ width: 256, height: '100vh' }}
        defaultSelectedKeys={['1']}
        selectedKeys={defaultKey}
        mode='inline'
        theme='dark'
      >
        {menuList.map((e, index) => {
          return (
            <Menu.Item
              key={e.title}
              onClick={() => {
                handleClick(e)
              }}
            >
              <Link to={e.url}>{e.title}</Link>
            </Menu.Item>
          )
        })}
      </Menu>
    </div>
  )
}
export default Sidebar
