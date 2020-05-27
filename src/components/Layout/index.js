import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import './index.less'

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    visible: false,
  }

  render() {
    return (
      <div className='electron-react-container'>
        <Sidebar />
        <div className='main-container'>
          {Array.isArray(this.props.children)
            ? this.props.children.map((child) => {
                return this.renderChild(child)
              })
            : this.props.children && this.renderChild(this.props.children)}
        </div>
      </div>
    )
  }

  renderChild(child) {
    return child
  }
}
export default Layout
