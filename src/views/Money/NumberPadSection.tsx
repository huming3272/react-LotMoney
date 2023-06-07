import React from "react";
import {Wrapper} from './NumberPadSection/Wrapper'
import {generateOutput} from './NumberPadSection/generateOutput'

type Props = {
    value: number,
    onChange: (amount: number)=> void;
    // 可以为空的onOk
    onOK?:() =>void;
}

const NumberPadSection: React.FunctionComponent<Props> = (props) => {
    const [padStr,setPadStr] = React.useState<string>('')
    // const memoizedPadGenerator = React.useCallback(() => {
    //      padGenerator()
    // },[])
    // 随机给键盘生成的函数
    React.useEffect(()=>{
        // 生成数字键一共十个
        const padGenerator = () => {
            let countStr = ''
            const result:string[] = []
            for(let i = 0; i< 10;i++){
                let randomNum = String(Math.floor((Math.random()*10)))
                if(i === 0){
                    result.push(randomNum)
                }else{
                    while(result.indexOf(randomNum) > -1){
                        randomNum = String(Math.floor((Math.random()*10)))
                    }
                    result.push(randomNum)
                }
            }
            // 插入删除、清空、OK等
            result.splice(3,0,'删除')
            result.splice(7,0,'清空')
            result.splice(11,0,'<button className="ok" style="height: 128px;float: right;">OK</button>')
            const zeroPosition = result.splice(12,1)
            result.splice(12,0,`<button className="zero" style="width:50%">${zeroPosition}</button>`)
            result.push(`<button className="dot">.</button>`)
            result.forEach((ele,index,group) =>{
                if(ele.length <3){
                    group[index] = `<button>${ele}</button>`
                }
                countStr = countStr + group[index]
            })
            setPadStr(countStr)
        }
        padGenerator()
    },[])
    // const [output, setOutput] = useState('0')
    const output = props.value
    // 给默认事件定义类型为React的鼠标事件
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        // as在typescript是强制指定类型的意思
        const currentButton = (e.target as HTMLButtonElement).textContent as string
        if('.0123456789删除清空'.indexOf(currentButton)>-1){
            const amount = generateOutput(currentButton, output)
            props.onChange(amount)
        }else if (currentButton === 'OK'){
        //    OK暂且功能为空
            props.onOK?.()
        }
    }

    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>
            {/*dangerouslySetInnerHTML={{__html: padStr}}*/}
            <div className="pad clearfix" dangerouslySetInnerHTML={{__html: padStr}} onClick={(e) => {
                onClickButtonWrapper(e)
            }}>
                {/*<button>1</button>*/}
                {/*<button>2</button>*/}
                {/*<button>3</button>*/}
                {/*<button>删除</button>*/}
                {/*<button>4</button>*/}
                {/*<button>5</button>*/}
                {/*<button>6</button>*/}
                {/*<button>清空</button>*/}
                {/*<button>7</button>*/}
                {/*<button>8</button>*/}
                {/*<button>9</button>*/}
                {/*<button className="ok">OK</button>*/}
                {/*<button className="zero">0</button>*/}
                {/*<button className="dot">.</button>*/}
            </div>
        </Wrapper>
    )
}
export {NumberPadSection}