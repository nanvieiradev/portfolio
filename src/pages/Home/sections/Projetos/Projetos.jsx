import './Projetos.css'
import React from 'react'
import Card from './Cards/Card'
import Arrow_right from '../../../../assets/icons/arrow_right.svg'
import Intro from '../../../../components/Intro/Intro'
import Tag from '../../../../components/Tag/Tag'
import { Link } from 'react-router-dom'
import GoodayCover from '../../../../assets/images/projects/Gooday_cover.png'

const Projetos = () => {
    return (
        <section id='projetos'>
            <Intro
                title='Projetos'
                text='Aqui você encontrará alguns dos projetos pessoais que tenho trabalhado.'
            />
            <div id="cards">
                <Card image={GoodayCover} title='Gooday - Mobile App Prototype' cta='Explorar' path='https://www.figma.com/file/FH0Mq95FBAowUnaMUU6R5G/Gooday?type=design&node-id=105%3A34&mode=design&t=psKKzetPziuu5qm4-1' />
            </div>
            {/* <Link to='/projetos'>
                <Tag content='Ver todos os projetos' icon={Arrow_right} />
            </Link> */}
        </section>
    )
}

export default Projetos