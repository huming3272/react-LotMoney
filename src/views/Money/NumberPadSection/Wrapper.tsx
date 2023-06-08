import styled from 'styled-components'
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad {
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      background: #1d4b9b;
      -webkit-touch-callout:none; /*系统默认菜单被禁用*/
      -webkit-user-select:none; /*webkit浏览器*/
      -khtml-user-select:none; /*早期浏览器*/
      -moz-user-select:none;/*火狐*/
      -ms-user-select:none; /*IE10*/
      user-select:none;
      &:hover {
        cursor: pointer;
        background: #566df8;
      }

      &.ok {
        height: 128px;
        float: right;
      }

      &.zero {
        width: 50%;
      }

      &:nth-child(1) {
        //background: #f2f2f2;
        filter: brightness(290%);
      }

      &:nth-child(2),
      &:nth-child(5) {
        //background: #E0E0E0;
        filter: brightness(240%);
      }

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        //background: #D3D3D3;
        filter: brightness(210%);
      }

      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        //background: #C1C1C1;
        filter: brightness(180%);
      }

      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        //background: #B8B8B8;
        filter: brightness(150%);
      }

      // ok
      &:nth-child(12) {
        //background: #9A9A9A;
      }

      // 点
      &:nth-child(14) {
        //background: #A9A9A9;
        filter: brightness(130%);
      }
    }
  }
`
export {Wrapper}