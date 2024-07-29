import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoSubtitle from '../../assets/images/logopreload.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faCloud, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false)

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoSubtitle} alt="logo"/>
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact="true" 
                    activeclassname="active" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faHome} color='fff' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact="true" 
                    activeclassname="active" 
                    className="about-link" 
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} color='fff' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact="true" 
                    activeclassname="active" 
                    className="contact-link" 
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color='fff' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact="true" 
                    activeclassname="active" 
                    className="portfolio-link" 
                    to="/portfolio"
                >
                    <FontAwesomeIcon icon={faSuitcase} color='fff' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact="true" 
                    activeclassname="active" 
                    className="weather-link" 
                    to="/weather"
                >
                    <FontAwesomeIcon icon={faCloud} color='fff' />
                </NavLink>
                <FontAwesomeIcon 
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color='#E3A5C7'
                    size='3x'
                    className='close-icon'
                />
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/chiara-v-valenzuela-l-863462284/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#fff'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/chiaravl'>
                        <FontAwesomeIcon icon={faGithub} color='#fff'/>
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
                onClick={() =>setShowNav(true)} 
                icon={faBars} color='#E3A5C7' 
                size='3x' 
                className='hamburger-icon'
            />
        </div>
    )
}

export default Sidebar