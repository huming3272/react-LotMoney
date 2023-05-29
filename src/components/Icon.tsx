import React from 'react';
import styled from 'styled-components';
import cs from 'classnames'

// 通过搜索和思考得到的用这个办法，用途是批量从./icons/中引入svg
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

// 声明一个类型
type Props = {
  //  name类型可能不存在
  name?: string
} & React.SVGAttributes<SVGElement>
// 增加svg属性
const Icon = styled.svg`
  fill: #333;
`
// 拿到父元素的参数
// const Icon = (props: Props) => {
//   return (
//     <svg className="icon">
//       <use xlinkHref={'#' + props.name}/>
//     </svg>
//   );
// };
const IconWrapper = (props:Props) =>{
    // 接收父组件props
    const {name, children, className, ...rest} = props
    return(
        <Icon className={cs('icon', className)} {...rest}>
            {/*js中的短路操作，name不存在时就不加载后面的，防止报错*/}
            {props.name &&<use xlinkHref={'#' + props.name}/>}
        </Icon>
    )
}

export default IconWrapper;
