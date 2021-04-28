import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import A from '../page/a'
import B from '../page/b'
import C from '../page/c'
import D from '../page/d/index.tsx'

const RouterConfig = (({ history }) => {

  return (
    <Router history={history}>
      <div>
        <ul>
          <li><Link to="/a">A</Link></li>
          <li><Link to="/b">B</Link></li>
        </ul>
        <Switch>
            <Route path='/b' component={B}  />
            <Route path='/a' component={A}  />
            <Route path='/c' component={C} exact  />
            <Route path='/aaaa' component={B} exact  />
            <Route path='/d' component={D} exact  />
        </Switch>
      </div>
    </Router>
  )

})

export default RouterConfig