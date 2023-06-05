import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 4px 0;
      justify-content: center;
      align-items: center;

      > a {
        display: flex;
        flex-direction: column;
        align-items: center;

        &.active {
          .icon {
            fill: #3d9dff !important;
          }

          background: #2263f3 !important;
          color: #3487ff;
          border-radius: 5px;
        }
      }

      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/tags">
                        <Icon name="tag"/>
                        <span>标签页</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/money">
                        <Icon name="money"/>
                        <span>记点啥</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/statistics">
                        <Icon name="chart"/>
                        <span>分析</span>
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;
