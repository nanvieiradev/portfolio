import './Sobre.css'
import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Intro from '../../../../components/Intro/Intro'

import arrow_right from '../../../../assets/icons/arrow_right.svg'

import Skill from './components/Skill/Skill'

const Sobre = () => {
  const [selectedCategory, setSelectedCategory] = useState('coding');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <section id='sobre'>
      <Intro
        title='Sobre mim'
        text='Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais principalmente em termos de programação, design e tecnologia.' />
      <div id="content">
        <div id="conhecer">
          <h3>Me conheça!</h3>
          <div id="text">
            <p className='medium'>
              Sou um <strong>Desenvolvedor Web Full Stack</strong> e <strong>estudante de UI/UX Design,</strong> construindo e gerenciando o Front e Back-end de sites e aplicações Web e projetando protótipos de interface que levam ao sucesso do produto geral. Confira alguns dos meus trabalhos na seção <strong>Projetos</strong>.
            </p>
            <p className='medium'>
              Estou aberto a <strong>oportunidades de trabalho</strong> onde possa contribuir, aprender e crescer. Se tiver uma boa oportunidade que corresponda às minhas competências e experiência, não hesite em me <strong>contatar</strong>.
            </p>
          </div>
          <ScrollLink to='contato' smooth={true} duration={300} className='scroll-contato'>
            <button className='cta'>
              Contato
              <img src={arrow_right} alt="" />
            </button>
          </ScrollLink>
        </div>
        <div id="skills">
          <h3>Minhas habilidades</h3>
          <select name="skills" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="coding">Coding 💻</option>
            <option value="design">Design 🎨</option>
            <option value="tools">Ferramentas 🛠️</option>
          </select>
          <div id="skills-list">
            {selectedCategory === 'coding' && (
              <div id="coding-skills">
                <Skill name='HTML' />
                <Skill name='CSS' />
                <Skill name='JavaScript' />
                <Skill name='NodeJS' />
                <Skill name='ReactJS' />
                <Skill name='ReduxJS' />
                <Skill name='Jest' />
                <Skill name='Tailwind CSS' />
                <Skill name='MySQL' />
                <Skill name='Git' />
                <Skill name='Regex' />
              </div>
            )}
            {selectedCategory === 'design' && (
              <div id="design-skills">
                <Skill name='Figma' />
                <Skill name='Adobe Photoshop' />
                <Skill name='Adobe Illustrator' />
              </div>
            )}
            {selectedCategory === 'tools' && (
              <div id="tools-skills">
                <Skill name='VS Code' />
                <Skill name='Postman' />
                <Skill name='GitHub' />
                <Skill name='GitHub Desktop' />
                <Skill name='XAMPP' />
                <Skill name='MySQL Workbench' />
              </div>
            )}
          </div>
        </div>
      </div>
    </section >
  )
}

export default Sobre