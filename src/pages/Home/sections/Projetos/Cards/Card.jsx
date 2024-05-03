import './Card.css'
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowRight from '../../../../../assets/icons/arrow_right.svg'

const Card = (props) => {
    return (
        <div className="card">
            <div className="image"><img src={props.image} alt={props.alt} /></div>
            <p className="title">{props.title}</p>
            <Link className='cta' target='_blank' rel='noopener noreferrer' to={props.path}><h5>{props.cta}</h5><img src={ArrowRight} alt="" /></Link>
        </div>
    )
}

export default Card