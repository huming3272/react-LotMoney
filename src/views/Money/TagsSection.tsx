import styled from "styled-components";
import React from "react";
import {useTags} from '../../hooks/useTags'

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
    height: calc(100vh - 570px);
    overflow-y: scroll;
    > li {
      background: #8fdef6;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background: #46b4ff;
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
// 定义Props类型,其中onChange是参数为字符串数组和返回值空
type Props = {
    value: number[];
    onChange: (selected: number[]) => void;
}
// 强化typescript的使用,给定义的函数施加类型限制,用React的函数组件类型
const TagsSection: React.FunctionComponent<Props> = (props) => {

    const {tags, addTag} = useTags()

    // const [selectedTags, setSelectedTags] = React.useState<string[]>([])
    const selectedTagIds = props.value;
    // 选中标签
    const onToggleTag = (tagId: number) => {
            // 通过调用父组件的函数来修改值
            props.onChange(
                [tagId]
            )

    }
    // 切换按钮选中显示css
    const getClass = (tagId:number)=>{
        return selectedTagIds.indexOf(tagId) >= 0 ?'selected': ''
    }
    return (
        <Wrapper>
            <ol>
                {/*// 为什么不用index作为key,因为产生逆序添加、逆序删除、等破坏数据顺序的行为会引起dom渲染混乱,在顺序时没问题*/}
                {tags.map((tag) => {
                    return (
                        <li key={tag.id} className={getClass(tag.id)}
                            onClick={() => {
                            onToggleTag(tag.id)
                        }}>
                            {tag.name}
                        </li>
                    )
                })}
            </ol>
            <button onClick={()=>{
                addTag()
            }}>新增标签</button>
        </Wrapper>
    )
}
export {TagsSection}