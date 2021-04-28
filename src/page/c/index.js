import React from 'react'
import styles from  './index.styl'
import { Input, Button } from 'antd'
import { connect  } from 'dva'
const C = (props) => {
  const { home, dispatch }  = props
  const { count } = home
 
  const add = () => {
    const newCount = count + 1
    dispatch({
      type: 'home/saveData',
      payload: {
        count: newCount
      }
    })
  }
  // const { count } = home
  return (
    <div className={styles.boxc} style={{overflowY: 'scroll'}}>
      <div>这是C</div>
      <div>
        <Button onClick={() => add()}>count + 1</Button>      
       <Input value={count}/>
      </div>
    </div>
  )
}

export default connect(({ home }) => ( {home }))(C)