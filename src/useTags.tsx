// 定义类型为字符串组成的数组
import React from "react";
const useTags = ()=>{
    // 封装一个自定义 Hook
    const [tags, setTags] = React.useState<{id:number,name:string}[]>
    ([
        {id:1,name:'穿'},
        {id:2,name:'吃'},
        {id:3,name:'房'},
        {id:4,name:'交通'}
    ])
    return {tags, setTags}
}
export {useTags}