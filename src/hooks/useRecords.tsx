import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
    tagIds: number[]
    note: string
    category: '+' | '-'
    amount: number
    // 以世界时间格式
    createAt: string // ISO 8601
}
// Omit是忽略，忽略RecordItem类型的，createAt属性，在此用来提升所定义类型的复用性
type newRecordItem = Omit<RecordItem, 'createAt'>

export const useRecords = () => {
    // 定义读写记录的useState
    const [records, setRecords] = useState<RecordItem[]>([]);
    useEffect(() => {
        // 一开始获取记录
        setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
    },[])
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
    },[records])
    const addRecord = (newRecord: newRecordItem) => {
        if(newRecord.amount <= 0){
            alert('请输入金额')
            return false
        }
        if(newRecord.tagIds.length === 0){
            alert('请选择标签')
            return false;
        }
        // 转为国际时间格式的字符串
        const record = {...newRecord, createAt: (new Date()).toISOString()}
        // 把records和record合并，变成新的数组更新
        setRecords(()=>{
            return [...records, record]
        })
        return true;
    }
    return {records, addRecord}
}