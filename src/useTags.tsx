// 定义类型为字符串组成的数组
import React from "react";
import {createId} from "./lib/createId";

const useTags = ()=>{
    // 封装一个自定义 Hook
    const [tags, setTags] = React.useState<{id:number,name:string}[]>
    ([
        {id:createId(),name:'穿'},
        {id:createId(),name:'吃'},
        {id:createId(),name:'房'},
        {id:createId(),name:'交通'}
    ])
    return {tags, setTags}
}
export {useTags}