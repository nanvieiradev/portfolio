import './Tag.css'

import React from 'react'

const Tag = (props) => {
    return (
        <span className="tag">
            {props.content}
            {props.icon ? <img src={props.icon} alt="" /> : ''}
        </span>
    )
}

export default Tag