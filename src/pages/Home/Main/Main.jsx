import React from 'react'
import './Main.css'

// Sections
import Banner from '../sections/Banner/Banner'
import Sobre from '../sections/Sobre/Sobre'
import Projetos from '../sections/Projetos/Projetos'
import Experiencias from '../sections/Experiencias/Experiencias'
import Contato from '../sections/Contato/Contato'

const Main = () => {
    return (
        <main>
            <Banner />
            <Sobre />
            <Projetos />
            <Experiencias />
            <Contato />
        </main>
    )
}

export default Main