import './Projetos.css'
import React from 'react'
import Card from './Cards/Card'
// import Arrow_right from '../../../../assets/icons/arrow_right.svg'
import Intro from '../../../../components/Intro/Intro'
// import Tag from '../../../../components/Tag/Tag'
// import { Link } from 'react-router-dom'
import GoodayCover from '../../../../assets/images/projects/Gooday_cover.png'
import CadeVcCover from '../../../../assets/images/projects/cadevc_cover.png'

const Projetos = () => {
    return (
        <section id='projetos'>
            <Intro
                title='Projetos'
                text='Aqui você encontrará alguns dos projetos pessoais que tenho trabalhado.'
            />
            <div id="cards">
                <Card image={GoodayCover} title='Gooday - Mobile App Prototype' cta='Explorar' path='https://www.figma.com/file/FH0Mq95FBAowUnaMUU6R5G/Gooday?type=design&node-id=105%3A34&mode=design&t=psKKzetPziuu5qm4-1' />
                <Card image={CadeVcCover} title='Cadê Você? - Platform Prototype' cta='Explorar' path='https://www.figma.com/design/yzQ2iQBZU7oLQVYT8uFQsC/%F0%9F%90%B6-Cad%C3%AA-Voc%C3%AA%3F?node-id=0-1&t=BaOdKUbLmrRnwcp7-1' />
            </div>
            {/* <Link to='/projetos'>
                <Tag content='Ver todos os projetos' icon={Arrow_right} />
            </Link> */}
        </section>
    )
}

export default Projetos