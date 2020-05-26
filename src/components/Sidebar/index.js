import React from 'react'
import { Menu } from 'antd'
import './index.less'

const { SubMenu } = Menu
const Sidebar = () => {
  return (
    <div className='siderbar-container'>
      <div className='side-top'>Electron React Demo</div>
      <Menu
        // onClick={this.handleClick}
        style={{ width: 256, height: '100vh' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
      >
        <Menu.Item key='1'>窗口管理</Menu.Item>

        {/* <SubMenu
          key='sub2'
          title={
            <span>
              <SettingOutlined />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key='5'>Option 9</Menu.Item>
          <Menu.Item key='6'>Option 10</Menu.Item>
          <Menu.Item key='7'>Option 11</Menu.Item>
          <Menu.Item key='8'>Option 12</Menu.Item>
        </SubMenu> */}
      </Menu>
    </div>
  )
}
export default Sidebar
