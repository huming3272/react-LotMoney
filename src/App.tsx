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
import Tag from './views/Tag'
import NoMatch from './views/NoMatch';
import styled from 'styled-components'
const AppWrapper = styled.div`
  color: #333;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          {/*exact精确匹配*/}
          <Route exact path="/tags">
            <Tags/>
          </Route>
          {/*表示匹配之后非斜杠的内容*/}
          <Route exact path="/tags/:id">
            <Tag/>
          </Route>
          <Route exact path="/money">
            <Money/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          {/*如果是主页重定向到/money*/}
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}


export default App;
