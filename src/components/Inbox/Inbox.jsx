import './Inbox.css'

import React from 'react'

const Inbox = (props) => {
    return (
        <div className='inbox_btn'>
            <img src={props.image} alt={props.alt} />
            {props.text}
        </div>
    )
}

export default Inbox