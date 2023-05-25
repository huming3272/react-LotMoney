import React from 'react';
import {useTags} from '../useTags'

import {useParams} from 'react-router-dom'
type Params = {
    id: string
}
const Tag: React.FunctionComponent = (props) => {
    const {findTag} = useTags();
    // 可以以对象形式获取路由的参数
    let {id} = useParams<Params>()
    const tag = findTag(parseInt(id))
    return (
        <div>{tag.name}</div>
    );
};

export default Tag;