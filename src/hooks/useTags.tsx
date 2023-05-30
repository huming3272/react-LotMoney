import React from "react";

import {createId} from "../lib/createId";
import {useUpdate} from './useUpdate'

const useTags = ()=>{
    // 封装一个自定义 Hook
    const [tags, setTags] = React.useState<{id:number,name:string}[]>([])
    // array.filter会返回符合要求的数组，在此因为只有一个符合的值，所以返回[0]
    //第二个参数不写时，监听一切
    React.useEffect(() => {
        // 获取初值
        let localTags = JSON.parse(window.localStorage.getItem('tags')||'[]')
        // 如果一开始没值,则设置
        if(localTags.length ===0){
            localTags = [
                {id:createId(),name:'穿'},
                {id:createId(),name:'吃'},
                {id:createId(),name:'房'},
                {id:createId(),name:'交通'}
            ]
        }
        setTags(localTags)
    },[])

    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags))
    },[tags])

    const findTag = (id:number) => {return tags.filter((tag)=>{return tag.id === id})[0]}
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
    const updateTag = (id: number, {name}:{name: string}) => {
        // react强调不可变数据，所以要用最新数据替换
        setTags(
            tags.map(
                (tag)=>{
                    return tag.id === id?{id,name:name}:tag
                }))
    }
    const deleteTag = (id: number) =>{
        // 反向选择，只返回和删除的id不相符的值，也算是删除
        setTags(tags.filter((tag) => {
            return tag.id !== id
        }))
    }
    const addTag = () => {
        console.log('hi')
        const tagName = window.prompt('新标签的名字为');
        if(tagName !== null && tagName !==''){
            setTags([...tags,{id:createId(),name:tagName}])
        }
    }
    return {tags, addTag,setTags, findTag, updateTag, findTagIndex,deleteTag};
}
export {useTags}