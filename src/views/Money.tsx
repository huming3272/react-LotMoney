import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components'

import {TagsSection} from './Money/TagsSection';
import {NotesSection} from './Money/NotesSection'
import {CategorySection} from './Money/CategorySection'
import {NumberPadSection} from './Money/NumberPadSection'

// 把组件当标签塞入
const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
//定义类型category 为 仅包含 -和+
type Category = '-' | '+'
function Money() {
    const [selected, setSelected] = React.useState({
        tags: [] as string[],
        note: '',
        category: '-' as Category,
        amount: 0
    })
    //Partial是代表类型中的一种
    const onChange = (obj: Partial<typeof selected>)=>{
        setSelected({...selected, ...obj})
    }
  return (
    <MyLayout>
        {selected.tags.join(',')}
        <hr/>
        {selected.note}
        <hr/>
        {selected.category}
        <hr/>
        {selected.amount}
        {/*标签块*/}
        <TagsSection
            value={selected.tags}
            onChange={(tags)=>{
                    return onChange({tags})
                }}>
        </TagsSection>
        {/*备注块*/}
        <NotesSection
            value={selected.note}
            onChange={(note)=>{
                return onChange({note})
            }}
        />
        {/*收入支出选项卡*/}
        <CategorySection
            value = {selected.category}
            onChange = {
                (category)=>{
                    return onChange({category})
                }
            }
        />
        {/*键盘块*/}
        <NumberPadSection
            value={selected.amount}
            onChange={
                (amount)=>{
                    return onChange({amount})
                }
            }
        />
    </MyLayout>
  );
}

export default Money;
