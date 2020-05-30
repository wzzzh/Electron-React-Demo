import React from 'react'
import OutLink from 'components/OutLink'
import './index.less'
const ProMenu = () => {
  const outLinkOpt = {
    url: 'https://www.electronjs.org/docs/api/menu',
    title: 'Menu',
  }
  return (
    <div className='menu-container'>
      <OutLink outLinkOpt={outLinkOpt}></OutLink>
    </div>
  )
}
export default ProMenu
