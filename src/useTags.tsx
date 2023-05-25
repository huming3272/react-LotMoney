// 定义类型为字符串组成的数组
import React from "react";
import {createId} from "./lib/createId";

// 定义一个初值，防止函数不停地运行
const defaultTags = [
    {id:createId(),name:'穿'},
    {id:createId(),name:'吃'},
    {id:createId(),name:'房'},
    {id:createId(),name:'交通'}
]
const useTags = ()=>{
    // 封装一个自定义 Hook
    const [tags, setTags] = React.useState<{id:number,name:string}[]>(defaultTags)
    const findTag = (id:number) => tags.filter((tag)=>{return tag.id === id})[0]
    return {tags, setTags, findTag}
}
export {useTags}