let id = parseInt(window.localStorage.getItem('idMax') || '0')
// ():number指的是返回值为数字
const createId = ():number =>{
    id +=1;
    window.localStorage.setItem('idMax', JSON.stringify(id))
    return id;
}
export {createId}

// 面向对象的类能更灵活的处理
// class Id {
//     value: number;
//     startFrom10000(){
//         return this.value + 10000
//     }
//     constructor() {
//         id +=1;
//         this.value =id
//     }
// }
// export {id}