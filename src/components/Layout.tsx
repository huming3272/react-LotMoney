import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
// 用来布局的组件，从父组件塞入的组件参数撑开页面
const Layout = (props: any) => {
  return (
    <Wrapper>
        <Main className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};
export default Layout;
