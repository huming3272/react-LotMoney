import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    background:white;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
    inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    > button{
      font-size: 18px; float: left; width: 25%; height: 64px; border: none;
      &:hover{cursor:pointer}
      &.ok{ height: 128px; float: right; }
      &.zero{ width: 50%; }
      &:nth-child(1){
        background:#f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background:#E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background:#C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background:#B8B8B8;
      }
      &:nth-child(12) {
        background:#9A9A9A;
      }
      &:nth-child(14) {
        background:#A9A9A9;
      }
    }
  }
`
const NumberPadSection:React.FunctionComponent = ()=>{
    // as在typescript是强制指定类型的意思
    const [output, setOutput] = useState('0')
    // 给默认事件定义类型为React的鼠标事件
    const NumberPadSection = (e: React.MouseEvent)=>{
        const currentButton =(e.target as HTMLButtonElement).textContent as string
        const numMap = '0123456789.'
        // 如果是初值，并且不为点
        if(output === '0' &&  currentButton !== '.'){

            setOutput(currentButton)
        }else{
            // 如果是键盘值包括点
            if(numMap.indexOf(currentButton)>-1){
                // 如果重复hasDot就是true
                const dotIndex = output.indexOf('.')
                // const floatLimit = output.slice(dotIndex)
                // console.log(floatLimit)
                const floatLimit = output.slice(dotIndex).length <3
                console.log(floatLimit)
                if(dotIndex>-1 && currentButton === '.'){
                    return
                }else if(floatLimit){
                    setOutput(output+currentButton)
                }
            //    其他的是删除、清空、OK
            }else{

            }
        }

    }
    return(
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={(e)=>{NumberPadSection(e)}}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>
        </Wrapper>
    )
}
export {NumberPadSection}