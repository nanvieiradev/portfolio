import './Experiencias.css'
import React from 'react'
import Intro from '../../../../components/Intro/Intro'
import Item from './List/Item'

const Experiencias = () => {
    return (
        <section id='experiencias'>
            <Intro title='Experiências' text='Aqui você verá experiências incríveis que tive relacionadas a programação e design.' />
            <ul>
                <Item
                    responsability='Competidor'
                    title='WorldSkills Brasil'
                    area='SENAI - Tecnologias WEB'
                    date='Julho 2022 - Outubro 2023'
                    outcomes={['5° lugar Nacional', '2° lugar Nordeste']}
                    darkConfirm={true}
                />
                <Item
                    responsability='Líder UI/UX, Designer'
                    title='Cadê Você?'
                    area='Projeto independente - Design'
                    date='Julho 2022 - Outubro 2023'
                    outcomes={['Líder responsável pela equipe', 'Construtor da prototipagem']}
                    darkConfirm={false}
                />                
            </ul>
        </section>
    )
}

export default Experiencias