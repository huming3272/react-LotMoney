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
    // array.filter会返回符合要求的数组，在此因为只有一个符合的值，所以返回[0]
    const findTag = (id:number) => tags.filter((tag)=>{return tag.id === id})[0]
    // 通过遍历后校对每个数组对象
    const findTagIndex = (id:number) =>{
        let result = -1
        for(let i=0; i < tags.length; i++){
            if(tags[i].id === id){
                result = i;
                break;
            }
        }
        return result
    }
    const updateTag = (id: number, obj:{name: string}) => {
    // 获取你要改的tag的下标
        const index = findTagIndex(id);
        // 深拷贝tags得到tagsClone
        const tagsClone = JSON.parse(JSON.stringify(tags))
        // 把tagsClone的第index删除，换成{id:id, name: obj.name}
        tagsClone.splice(index,1,{id:id, name:obj.name});
        setTags(tagsClone);
    }
    return {tags, setTags, findTag, updateTag, findTagIndex};
}
export {useTags}