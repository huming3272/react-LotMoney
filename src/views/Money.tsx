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
function Money() {
  return (
    <MyLayout>
        {/*标签块*/}
        <TagsSection>
        </TagsSection>
        {/*备注块*/}
        <NotesSection/>
        {/*收入支出选项卡*/}
        <CategorySection/>
        {/*键盘块*/}
        <NumberPadSection/>
    </MyLayout>
  );
}

export default Money;
