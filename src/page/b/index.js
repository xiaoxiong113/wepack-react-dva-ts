import React from 'react'
// import './index.less'
// import styles from './index.less'
// import './index.css'

const B = (props) => {
  const handleToD = () => {
    props.history.push('/d')
  }
  return (
    <div >
      这是B组件
      <div onClick={handleToD}> 去D</div>
    </div>
  )
}

export default B