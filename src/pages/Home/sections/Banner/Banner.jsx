import './Banner.css'
import { Link as ScrollLink } from 'react-scroll'
import cylinder from '../../../../assets/images/cylinder.png'
import star from '../../../../assets/images/star.png'
import donut from '../../../../assets/images/donut.png'
import arrow_right from '../../../../assets/icons/arrow_right.svg'
import Tag from '../../../../components/Tag/Tag'
import React from 'react'
import resumePDF from '../../../../assets/docs/RENAN_VIEIRA_CV.pdf'

const Banner = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'RENAN_VIEIRA_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <section id='banner'>
            <div id="content">
                <Tag content='Opa! 👋 Eu sou o Nanvieira' />
                <h1>Full Stack Developer</h1>
                <p>Apaixonado por código e design, sou um desenvolvedor web com 5 anos de experiência no mundo da programação.</p>
                <div id="ctas">
                    <button className='cta' onClick={handleDownload}>Baixar currículo</button>
                    <ScrollLink to='contato' smooth={true} duration={100}>
                        <button className='cta'>Contato<img src={arrow_right} alt="" /></button>
                    </ScrollLink>
                </div>
            </div>
            <div id="illustrations">
                <img className='cylinder' src={cylinder} alt="" />
                <img className='star' src={star} alt="" />
                <img className='donut' src={donut} alt="" />
            </div>
        </section >
    )
}

export default Banner
