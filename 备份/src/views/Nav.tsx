import styled from "styled-components";
import {Link,NavLink} from "react-router-dom";
import React from "react";

// 加载三个svg图标
require('../icons/money.svg');
// require('../icons/tag.svg');
// require('../icons/chart.svg');


const NavWrapper = styled.nav`
  border: 1px solid blue;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display: flex;
    > li{
      width: 33.3333%;
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 4px 0;
      justify-content: center;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }
      // 此处效果用于navlink时高亮
      .myActive{
        background: grey;
      }
    }
  }
`
const Nav = ()=>{
    return (
        <NavWrapper>
            <ul>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#tag"/>
                    </svg>
                    {/*引入navlink用于高亮处理*/}
                    <NavLink activeClassName="myActive" to="/tags">标签页</NavLink>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#money"/>
                    </svg>
                    <NavLink activeClassName="myActive" to="/money">记账页</NavLink>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#chart"/>
                    </svg>
                    <NavLink activeClassName="myActive" to="/statistics">统计页</NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav