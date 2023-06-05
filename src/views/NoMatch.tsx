import React from 'react';
import styled from 'styled-components'
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
function NoMatch() {
  return (
      <Wrapper>
        <h1>你输入的是什么网址啊，没有哦</h1>
      </Wrapper>
  );
}

export default NoMatch;
