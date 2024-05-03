import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Menu from '../../assets/icons/menu.svg';
import Close from '../../assets/icons/close.svg';

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current.offsetHeight;
      const sections = ['banner', 'sobre', 'projetos', 'experiencias', 'contato'];

      let currentSection = null;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (window.pageYOffset >= sectionTop - headerHeight && window.pageYOffset < sectionBottom) {
            currentSection = sectionId;
          }
        }
      });

      setVisibleSection(currentSection);
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? 'scrolled' : ''} ${visibleSection ? 'active' : ''}`} ref={headerRef}>
      <div className='logo'>
        <label>
          {props.linkToBanner && (
            <ScrollLink onClick={menuOpen ? toggleMenu : null} to='banner' smooth={true} duration={300} offset={-80} className='link'>
              NANVIEIRA DEV
            </ScrollLink>
          )}
          {!props.linkToBanner && (
            <Link to='/' className='link'>NANVIEIRA DEV</Link>
          )}
        </label>
      </div>
      <nav id='desktop-menu'>
        <ul>
          <li className={`link ${visibleSection === 'sobre' ? 'active' : ''}`}><ScrollLink to='sobre' smooth={true} duration={300} offset={-79}>Sobre</ScrollLink></li>
          <li className={`link ${visibleSection === 'projetos' ? 'active' : ''}`}><ScrollLink to='projetos' smooth={true} duration={300} offset={-79}>Projetos</ScrollLink></li>
          <li className={`link ${visibleSection === 'experiencias' ? 'active' : ''}`}><ScrollLink to='experiencias' smooth={true} duration={300} offset={-79}>Experiências</ScrollLink></li>
          <li className={`link ${visibleSection === 'contato' ? 'active' : ''}`}><ScrollLink to='contato' smooth={true} duration={300} offset={-79}>Contato</ScrollLink></li>
        </ul>
      </nav>
      <div id="menu" onClick={toggleMenu}>
        {!menuOpen && (
          <img src={Menu} alt="" id='openMenu' />
        )}
        {menuOpen && (
          <img src={Close} alt="" id='closeMenu' />
        )}
      </div>
      {menuOpen && (
        <nav id="mobile-menu">
          <ul>
            <li className={`link ${visibleSection === 'sobre' ? 'active' : ''}`}><ScrollLink onClick={toggleMenu} to='sobre' smooth={true} duration={300} offset={-79}>Sobre</ScrollLink></li>
            <li className={`link ${visibleSection === 'projetos' ? 'active' : ''}`}><ScrollLink onClick={toggleMenu} to='projetos' smooth={true} duration={300} offset={-79}>Projetos</ScrollLink></li>
            <li className={`link ${visibleSection === 'experiencias' ? 'active' : ''}`}><ScrollLink onClick={toggleMenu} to='experiencias' smooth={true} duration={300} offset={-79}>Experiências</ScrollLink></li>
            <li className={`link ${visibleSection === 'contato' ? 'active' : ''}`}><ScrollLink onClick={toggleMenu} to='contato' smooth={true} duration={300} offset={-79}>Contato</ScrollLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
