import React from 'react'
import { Input, Button } from 'antd'
import styles from './index.scss'

const A = (props) => {
  const handleToC = () => {
    props.history.push('/c', {count: 1})
  }
  return (
    <div className={styles.boxa}>
      <Button type="primary"> 测试按钮</Button>
      这是A
      <Input />
      <span className="nihao"  onClick={() => handleToC()}>去C</span>
    </div>
  )
}

export default A