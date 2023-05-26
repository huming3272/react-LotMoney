import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
`;
// Props的label类型是字符串并且是input元素
type Props = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<Props> = (props) =>{
    // 获取label元素和默认props的children属性，以及其余属性均赋值给rest
    const {label, children, ...rest} = props;
    return (
        <Label>
            <span>{props.label}</span>
            {/*{...rest}等价于 type='text' value='' onChange=()=>{}*/}
            <input {...rest}/>
        </Label>
    )
}
export {Input}