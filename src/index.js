// import React from 'react'
// import ReactDOM from 'react-dom'
import dva from 'dva'
import { createBrowserHistory as createHistory } from 'history'
import RouterConfig from './router'


const app =  dva({
  history: createHistory(),
})

app.model(require('./models/home').default)

app.router(RouterConfig);

app.start('#root');

// const App = () => {
//   return (
//     <div className={styles.box}>
//       11155ssssssdsdsdsd
//       <RouterConfig />
     
//     </div>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );