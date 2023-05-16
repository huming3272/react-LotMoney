import React from 'react';
import {
    // 使用HashRouter就是hash模式不需要，后台支持
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import styled from 'styled-components'
import Nav from './views/Nav'

const Wrapper = styled.div`
height: 100vh;
  display:flex;
  flex-direction: column;
`
const Main = styled.div`
flex-grow:1;
overflow: auto;
`


function App() {
  return (
      <Router>
          <Wrapper>
              <Main>
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
                      <Redirect exact from="/" to="/money"/>
                      {/*把主页/重定向到/money*/}
                      <Route path="*">
                          {/*将所有不匹配的路由最后匹配到NoMatch*/}
                          <NoMatch/>
                      </Route>
                  </Switch>
              </Main>
              <Nav/>
          </Wrapper>
      </Router>
  );
}
function NoMatch() {
// 用来处理需要404的页面
  return (
      <div>
          页面不存在哦，请确认后重新输入
      </div>
  )
}
function Statistics(){
    return (
        <h2>统计页面</h2>
    )
}
function Tags(){
    return (
        <h2>标签页面</h2>
    )
}
function Money(){
    return(
        <h2>记账页面</h2>
    )
}

export default App;
