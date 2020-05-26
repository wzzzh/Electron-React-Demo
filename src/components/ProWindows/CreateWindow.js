import React from 'react'
const NewWindow = () => {
  return (
    <>
      <div>Hello World</div>
      <p
        onClick={() => {
          window.close()
        }}
      >
        关闭
      </p>
    </>
  )
}
export default NewWindow
