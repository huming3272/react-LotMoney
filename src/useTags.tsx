// 定义类型为字符串组成的数组
import React from "react";
const useTags = ()=>{
    // 封装一个自定义 Hook
    const [tags, setTags] = React.useState<string[]>(['穿', '吃', '房', '交通'])
    return {tags, setTags}
}
export {useTags}