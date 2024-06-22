import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import SocialTwitter from '../../assets/icons/social/social_twitter.svg'
import SocialInstagram from '../../assets/icons/social/social_instagram.svg'
import SocialLinkedIn from '../../assets/icons/social/social_linkedin.svg'
import SocialGitHub from '../../assets/icons/social/social_github.svg'
import SocialDiscord from '../../assets/icons/social/social_discord.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div id='content'>
        <div id="text">
          <h5>Nanvieira DEV</h5>
          <label className='fixed-size'>
            Um Desenvolvedor Web Full Stack e aprendiz de UI/UX Design, construindo e gerenciando o Front e Back-end de sites e aplicações Web e projetando protótipos de interface que levam ao sucesso do produto geral. 💎
          </label>
        </div>
        <div id="social">
          <h5>Social</h5>
          <div id="social-medias">
            <Link to='https://twitter.com/nanvieiradev' target='_black' rel='noopener noreferrer'><img src={SocialTwitter} alt="Twitter" /></Link>
            <Link to='https://instagram.com/nanvieiradev' target='_black' rel='noopener noreferrer'><img src={SocialInstagram} alt="Instagram" /></Link>
            <Link to='https://linkedin.com/in/nanvieiradev' target='_black' rel='noopener noreferrer'><img src={SocialLinkedIn} alt="LinkedIn" /></Link>
            <Link to='https://github.com/nanvieiradev' target='_black' rel='noopener noreferrer'><img src={SocialGitHub} alt="GitHub" /></Link>
            <Link to='https://discord.com/users/300706687185190913' target='_black' rel='noopener noreferrer'><img src={SocialDiscord} alt="Discord" /></Link>
          </div>
        </div>
      </div>
      <hr />
      <label id='copy'>
        &copy; Direitos Autorais {currentYear}. Feito por <ScrollLink to='banner' smooth={true} duration={300} offset={-80} className='footer-link'>Renan Vieira</ScrollLink>
      </label>
    </footer>
  )
}

export default Footer