import React from 'react'
import styles from  './index.styl'
import { Input, Button } from 'antd'
import { connect  } from 'dva'

const D = (props) => {
  const { home, dispatch }  = props
  const { count } = home
  // const { count } = home
  return (
    <div className={styles.boxc} style={{overflowY: 'scroll'}}>
      <div>这是D</div>
      <div>count：{count}</div>
    </div>
  )
}

export default connect(({ home }: any) => ( { home }))(D)

// export default D