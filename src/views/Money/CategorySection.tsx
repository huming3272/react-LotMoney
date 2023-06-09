import styled from "styled-components";
import React from "react";

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#2b70e8;
    > li {
      width: 50%;
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block;
        height: 5px;
        background:#1d4b9b;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`
// 定义类型
type Props = {
    value: '-' | '+',
    onChange: (value:'-'|'+') => void
}
const CategorySection:React.FunctionComponent<Props> = (props)=>{
    // 为表驱动做准备
    const categoryMap = {'-':'支出','+':'收入'}
    // 定义一个叫做category的类型，是按照categoryMap来的
    type category = typeof categoryMap
    // 定义一个叫做keys的变量，获取category的键，保存为联合类型
    type keys = keyof category
    const [categoryList] = React.useState<keys[]>(['-','+'])
    // const [category,setCategory] = React.useState('-')
    const category = props.value
    return(
        <Wrapper>
            <ul>
                {categoryList.map((cate)=>{
                    return (
                        <li className={category===cate ? 'selected':''} onClick={()=>{
                            props.onChange(cate)
                        }} key={cate}>{
                            categoryMap[cate]
                        }
                        </li>
                    )
                    })}
            </ul>
        </Wrapper>
    )
}
export {CategorySection}