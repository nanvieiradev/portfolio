import './Contato.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Star2 from '../../../../assets/images/star2.png'
import Helix from '../../../../assets/images/helix.png'
import Intro from '../../../../components/Intro/Intro'
import Inbox from '../../../../components/Inbox/Inbox'

const Contato = () => {
    const phone = process.env.REACT_APP_WHATSAPP
    const email = process.env.REACT_APP_EMAIL

    return (
        <section id='contato'>
            <img src={Star2} alt="" className='illustration' />
            <Intro medium={true} title='Contato' text='Sinta-se à vontade para entrar em contato comigo através dos métodos abaixo e retornarei em contato com você o mais breve possível.' />
            <div id="inbox">
                <Link className='inbox-link' to={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
                    <Inbox text='E-mail' />
                </Link>
                <Link className='inbox-link' to={`https://wa.me/${phone}`} target='_blank' rel='noopner noreferrer'>
                    <Inbox image={''} text='WhatsApp' />
                </Link>
            </div>
            <img src={Helix} alt="" className='illustration' />
        </section >
    )
}

export default Contato