import Layout from '../components/Layout';
import React from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components'
import {useRecords} from '../hooks/useRecords'
import {useTags} from '../hooks/useTags'
import day from 'dayjs'

const CategoryWrapper = styled.div`
  background: white;
`
const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  border-bottom: 1px solid #f5f5f5;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
function Statistics() {
    const [category, setCategory] = React.useState<'-'|'+'>('-')
    const {records} = useRecords();
    const {getName} = useTags();
  return (
    <Layout>
        <CategoryWrapper>
            <CategorySection value={category} onChange={
                (value) => {
                    return setCategory(value)
                }
            }/>
        </CategoryWrapper>
        <div>
            {/*筛选一下*/}
            {records.filter((r)=>r.category === category).map((r)=>{
                return (
                <Item key={r.createAt}>
                    <div className="tags">
                        <span>{getName(r.tagIds[0])}</span>
                    </div>
                    {r.note &&
                    <div className="note">
                        {r.note}
                    </div>}
                    <div className="amount">
                        ￥{r.amount}
                    </div>
                </Item>
                )
            })}
        </div>
    </Layout>
  );
}


export default Statistics;
