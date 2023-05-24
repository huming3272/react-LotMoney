const generateOutput = (text: string, output=0)=>{
    const numPad = '0123456789'
    let key: string
    if (numPad.indexOf(text) > -1) {
        key = 'num'
    } else {
        key = text
    }
    const stringOutput = String(output)
    const dotIndex = stringOutput.indexOf('.')
    const floatLimit = stringOutput.slice(dotIndex).length < 3
    const lengthLimit = stringOutput.slice(0, dotIndex).length

    //用表驱动优化逻辑
    // 加上类型约束
    const numMap: { [key: string]: Function } = {
        '.': () => {
            if (dotIndex > -1 && text === '.') {
                return stringOutput
            } else if (floatLimit) {
                return (stringOutput + text)
            } else{
                return stringOutput
            }
        },
        // 如果是键盘值
        'num': () => {
            // 如果是初值
            if (stringOutput === '0') {
                console.log(text)
                return (text)
            } else if (floatLimit && lengthLimit < 9) {
                return(stringOutput + text)
            } else{

                return (stringOutput)
            }
        },
        '删除': () => {
            if (stringOutput.length === 1) {
                return('0')
            } else {
                return(stringOutput.slice(0, stringOutput.length - 1))
            }
        },
        '清空': () => {
            return('0')
        },
        'OK': () => {
            console.log(stringOutput)
            return stringOutput
        },
    }
    return numMap[key]()
}
export {generateOutput}