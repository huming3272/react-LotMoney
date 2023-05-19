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
const NotesSection:FunctionComponent = () => {
    const [note,setNote] = React.useState('')
    // 增加类型名为React的事件改变HTML元素

    const change = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.persist();
        setNote(()=>{
            console.log(e.currentTarget.value)
            return e.currentTarget.value
        })
    }
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                {/* 受控组件写法value={note} onChange={(e)=>{
                change(e)*/}
                {/*类似vue input的v-model.lazy指令*/}
                <input type="text" placeholder="在这里添加备注" defaultValue={note} onBlur={(e)=>{change(e)}}/>
            </label>
        </Wrapper>
    )
}
export {NotesSection}