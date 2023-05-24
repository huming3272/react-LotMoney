import React from "react";
import {Wrapper} from './NumberPadSection/Wrapper'
import {generateOutput} from './NumberPadSection/generateOutput'

type Props = {
    value: number,
    onChange: (amount: number)=> void;
    // 可以为空的onOk
    onOk?:() =>void;
}

const NumberPadSection: React.FunctionComponent<Props> = (props) => {

    // const [output, setOutput] = useState('0')
    const output = props.value
    // 给默认事件定义类型为React的鼠标事件
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        // as在typescript是强制指定类型的意思
        const currentButton = (e.target as HTMLButtonElement).textContent as string

        if('.0123456789删除清空'.indexOf(currentButton)>-1){
            const amount = generateOutput(currentButton, output)
            // console.log(result)
            props.onChange(amount)
        }else if (currentButton === 'OK'){

        }



    }
    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={(e) => {
                onClickButtonWrapper(e)
            }}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>
        </Wrapper>
    )
}
export {NumberPadSection}