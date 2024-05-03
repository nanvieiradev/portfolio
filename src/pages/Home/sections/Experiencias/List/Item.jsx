import './Item.css'

import React from 'react'
import ConfirmIconBlack from '../../../../../assets/icons/xp/confirm_black.svg'
import ConfirmIconWhite from '../../../../../assets/icons/xp/confirm_white.svg'

const Item = (props) => {
    return (
        <li className='xp-item'>
            <h5 className="responsability">{props.responsability}</h5>
            <h3 className="title">{props.title}</h3>
            <button className='area'>{props.area}</button>
            <ul className='outcomes'>
                {props.outcomes.map((outcome, index) => (
                    <li key={index} className='outcome'><img src={props.darkConfirm ? ConfirmIconBlack : ConfirmIconWhite} alt="" />{outcome}</li>
                ))}
            </ul>
        </li>
    )
}

export default Item