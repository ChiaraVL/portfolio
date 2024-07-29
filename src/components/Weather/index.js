import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from "react-loaders";
import './index.scss'

const Weather = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeout);  // Cleanup the timeout
    }, []);

    return (
        <>
            <div className='container weather-page'>
                <h1 className="page-title">
                        <AnimatedLetters strArray={"Clima".split("")} idx={15} letterClass={letterClass} />
                </h1>
                <div className='scontainer'>
                    <div className='search-box'>
                        <FontAwesomeIcon className='icon' icon={faLocationDot} color='#211F1C'/>
                        <input type='text' placeholder='Ingresa tu ubicación' />
                        <button className='search'>
                            <FontAwesomeIcon icon={faSearch} color='#211F1C'/>
                        </button>
                    </div>
                    <div className='weather-box'>
                        <div className='info-weather'>
                            < div className='weather'>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Weather