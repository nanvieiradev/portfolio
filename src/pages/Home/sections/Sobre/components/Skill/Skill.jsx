import './Skill.css'

import React from 'react'

const Skills = (props) => {
    return (
        <div className='skill'>            
            <img src={props.logo} alt=""/>
            {props.name}
        </div>
    )
}

export default Skills