import styled from "styled-components";
import React from "react";

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%;
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block;
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`
const CategorySection = ()=>{
    // 为表驱动做准备
    const categoryMap = {'-':'支出','+':'收入'}
    // 定义一个叫做category的类型，是按照categoryMap来的
    type category = typeof categoryMap
    // 定义一个叫做keys的变量，获取category的键，保存为联合类型
    type keys = keyof category
    const [categoryList] = React.useState<keys[]>(['-','+'])
    const [category,setCategory] = React.useState('-')

    return(
        <Wrapper>
            <ul>
                {categoryList.map((cate)=>{
                    return (
                        <li className={category===cate ? 'selected':''} onClick={()=>{
                            setCategory(cate)
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