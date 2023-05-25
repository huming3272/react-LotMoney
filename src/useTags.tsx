// 定义类型为字符串组成的数组
import React from "react";
const useTags = ()=>{
    const [tags, setTags] = React.useState<string[]>(['穿', '吃', '房', '交通'])
    return {tags, setTags}
}
export {useTags}