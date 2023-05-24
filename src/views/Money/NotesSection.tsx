import styled from "styled-components";
import React, {FunctionComponent} from "react";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }`
type Props = {
    value: string,
    onChange: (note: string)=> void
}
// 这里的<Props>是参数
const NotesSection:FunctionComponent<Props> = (props) => {
    // const [note,setNote] = React.useState('')
    // 增加类型名为React的事件改变HTML元素
    const note = props.value
    const refInput = React.useRef<HTMLInputElement>(null);
    const blur = ()=>{
        if(refInput.current !== null){
            props.onChange(
                refInput.current.value
            )
        }
    }
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                {/* 受控组件写法value={note} onChange={(e)=>{
                change(e)*/}
                {/*类似vue input的v-model.lazy指令*/}
                <input type="text" ref={refInput} placeholder="在这里添加备注" defaultValue={note} onBlur={(e)=>{blur()}}/>
            </label>
        </Wrapper>
    )
}
export {NotesSection}