import './Intro.css'

import React from 'react'

const Intro = (props) => {
    return (
        <div className="intro">
            <h2>{props.title}</h2>
            <p className={props.medium ? 'medium' : ''}>
                {props.text}
            </p>
        </div>
    )
}

export default Intro