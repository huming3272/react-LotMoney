import React from 'react';
import {
  // 以哈希方式路由跳转，另一种方式需要服务器支持
  HashRouter as Router,
  //被switch包裹的route只匹配第一个值,不然的话，每个与当前路径匹配的<Route>都会被绘制
  Switch,
  //  匹配到对应路由，就显示
  Route,
  //  重定向路由
  Redirect} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        {/*如果是主页重定向到/money*/}
        <Redirect exact from="/" to="/money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
