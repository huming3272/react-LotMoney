import Layout from '../components/Layout';
import React from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components'
import {RecordItem,useRecords} from '../hooks/useRecords'
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
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`
function Statistics() {
    const [category, setCategory] = React.useState<'-'|'+'>('-')
    const {records} = useRecords();
    const {getName} = useTags();
    // 筛选出收入和支出
    const selectedRecords = records.filter((r) => {
        return r.category === category
    })
    // {'2023-06-01': [item, item], '2023-05-31': [item, item], '2023-05-29': [item, item, item, item]}
    // 约束类型key为string,value为RecordItem的值
    const hash: {[K: string]: RecordItem[]} = {}
    selectedRecords.forEach((r) => {
        const key = day(r.createAt).format('YYYY年MM月DD日')
        if(!(key in hash)){
            hash[key] = []
        }
        hash[key].push(r);
    })
    // 按照字典排序
    const array = Object.entries(hash).sort(
        (a,b) =>{
            if(a[0] === b[0]) return 0;
            if(a[0] > b[0]) return -1;
            if(a[0] < b[0]) return 1;
            return 0
        }
        )
    console.dir(array)
  return (
    <Layout>
        <CategoryWrapper>
            <CategorySection value={category} onChange={
                (value) => {
                    return setCategory(value)
                }
            }/>
        </CategoryWrapper>
        {
            array.map(([date,records]) => {
                return (
                    <div key={date}>
                        <Header>
                            {date}
                        </Header>
                        <div>
                            {records.map((r,index) => {
                                return <Item key={r.createAt}>
                                    <div className='tags oneLine'>
                                        {
                                            r.tagIds.map((tagId) => {
                                                return (
                                                    <span key={tagId}>
                                                        {getName(tagId)}
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                    {r.note && <div className='note'>
                                        {r.note}
                                    </div> }
                                    <div className="amount">
                                        ￥{r.amount}
                                    </div>
                                </Item>
                            })}
                        </div>
                    </div>
                )
            })
        }
        {/*<div>*/}
        {/*    /!*筛选一下*!/*/}
        {/*    {selectedRecords.map((r)=>{*/}
        {/*        return (*/}
        {/*        <Item key={r.createAt}>*/}
        {/*            <div className="tags">*/}
        {/*                <span>{getName(r.tagIds[0])}</span>*/}
        {/*            </div>*/}
        {/*            {r.note &&*/}
        {/*            <div className="note">*/}
        {/*                {r.note}*/}
        {/*            </div>}*/}
        {/*            <div className="amount">*/}
        {/*                ￥{r.amount}*/}
        {/*            </div>*/}
        {/*        </Item>*/}
        {/*        )*/}
        {/*    })}*/}
        {/*</div>*/}
    </Layout>
  );
}


export default Statistics;
