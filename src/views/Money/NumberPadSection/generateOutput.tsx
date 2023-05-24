const generateOutput = (text: string, output='0')=>{
    const numPad = '0123456789'
    let key: string
    if (numPad.indexOf(text) > -1) {
        key = 'num'
    } else {
        key = text
    }
    const dotIndex = output.indexOf('.')
    const floatLimit = output.slice(dotIndex).length < 3
    const lengthLimit = output.slice(0, dotIndex).length

    //用表驱动优化逻辑
    // 加上类型约束
    const numMap: { [key: string]: Function } = {
        '.': () => {
            if (dotIndex > -1 && text === '.') {
                return output
            } else if (floatLimit) {
                return (output + text)
            } else{
                return output
            }
        },
        // 如果是键盘值
        'num': () => {
            // 如果是初值
            if (output === '0') {
                console.log(text)
                return (text)
            } else if (floatLimit && lengthLimit < 9) {
                return(output + text)
            } else{

                return (output)
            }
        },
        '删除': () => {
            if (output.length === 1) {
                return('0')
            } else {
                return(output.slice(0, output.length - 1))
            }
        },
        '清空': () => {
            return('0')
        },
        'OK': () => {
            console.log(output)
            return output
        },
    }
    return numMap[key]()
}
export {generateOutput}