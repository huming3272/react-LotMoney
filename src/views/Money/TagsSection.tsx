import styled from "styled-components";
import React from "react";
import {useTags} from '../../useTags'

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
// 定义Props类型,其中onChange是参数为字符串数组和返回值空
type Props = {
    value: number[];
    onChange: (selected: number[]) => void;
}
// 强化typescript的使用,给定义的函数施加类型限制,用React的函数组件类型
const TagsSection: React.FunctionComponent<Props> = (props) => {
    const {tags, setTags} = useTags()
    // const [selectedTags, setSelectedTags] = React.useState<string[]>([])
    const selectedTagIds = props.value;
    const onAddTag = () => {
        const tagName = window.prompt('您要新增的标签为')
        if (tagName != null) {
            // 异步的方式更新数据，并刷新
            setTags(() => {
                return [...tags, {
                    id:Math.random(),
                    name:tagName
                }]
            })
        }
    }
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
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}
export {TagsSection}