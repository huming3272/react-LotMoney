// 一个监听值变化的自定义钩子函数
import {useEffect, useRef} from 'react'
// 两个参数分别是操作函数和修改值的钩子
export const useUpdate = (fn: () => void,deps:any[]) =>{
    const count = useRef(0);
    // 不写第二个参数，那就是刷新一次更新一次
    useEffect(() => {
        count.current +=1;
    });
    //
    useEffect(()=>{
        //因为监听的数值会先赋值操作一次，所以防止混乱，计数的方式运行操作函数
        if(count.current > 1){
            fn()
        }
    //  不可变数据
    },deps)
}