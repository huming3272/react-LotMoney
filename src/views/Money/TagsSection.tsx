import styled from "styled-components";
import React from "react";

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background: #1A94E6;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`
// 强化typescript的使用,给定义的函数施加类型限制,用React的函数组件类型
const TagsSection: React.FunctionComponent = () => {
    // 定义类型为字符串组成的数组
    const [tags, setTags] = React.useState<string[]>(['穿', '吃', '房', '交通'])
    const [selectedTags, setSelectedTags] = React.useState<string[]>([])
    const onAddTag = () => {
        const tagName = window.prompt('您要新增的标签为')
        console.log(tagName)
        if (tagName != null) {
            // 异步的方式更新数据，并刷新
            setTags(() => {
                return [...tags, tagName]
            })
        }
    }
    // 选中标签
    const onToggleTag = (tag: string) => {
            setSelectedTags(()=>{
                return [tag]
            })

    }
    // 切换按钮选中显示
    const getClass = (tag:string)=>{
        return selectedTags.indexOf(tag) >= 0 ?'selected': ''
    }
    return (
        <Wrapper>
            <ol>
                {/*// 为什么不用index作为key,因为产生逆序添加、逆序删除、等破坏数据顺序的行为会引起dom渲染混乱,在顺序时没问题*/}
                {tags.map((tag:string) => {
                    return (
                        <li key={tag} className={getClass(tag)} onClick={() => {
                            onToggleTag(tag)
                        }}>
                            {tag}
                        </li>
                    )
                })}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagsSection}