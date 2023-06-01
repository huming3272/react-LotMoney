import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components'

import {TagsSection} from './Money/TagsSection';
import {NotesSection} from './Money/NotesSection'
import {CategorySection} from './Money/CategorySection'
import {NumberPadSection} from './Money/NumberPadSection'

import {useRecords} from '../hooks/useRecords'

// 把组件当标签塞入
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
//定义类型category 为 仅包含 -和+
type Category = '-' | '+'
// 定义默认值
const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
}

function Money() {
    const [selected, setSelected] = React.useState(defaultFormData)
    const {records, addRecord} = useRecords()
    //Partial是代表类型中的一种
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({...selected, ...obj})
    }
    const submit = () => {
        if (addRecord(selected)) {
            alert('保存成功')
            setSelected(defaultFormData)
        }

    }
    return (
        <MyLayout>
            <hr/>
            {/*标签块*/}
            <TagsSection
                value={selected.tagIds}
                onChange={(tagIds) => {
                    return onChange({tagIds})
                }}>
            </TagsSection>
            {/*备注块*/}
            <NotesSection
                value={selected.note}
                onChange={(note) => {
                    return onChange({note})
                }}
            />
            {/*收入支出选项卡*/}
            <CategorySection
                value={selected.category}
                onChange={
                    (category) => {
                        return onChange({category})
                    }
                }
            />
            {/*键盘块*/}
            <NumberPadSection
                value={selected.amount}
                onChange={
                    (amount) => {
                        return onChange({amount})
                    }
                }
                // 子组件触发ok事件
                onOK={submit}
            />
        </MyLayout>
    );
}

export default Money;
