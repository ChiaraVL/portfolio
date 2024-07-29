import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSearch, faWater, faWind } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from "react-loaders";
import Cloud from '../../assets/images/cloud.png';
import './index.scss';

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
                            <div className='weather'>
                                <img src={Cloud} alt='clima'/>
                                <p className='temperature'>16<span>°C</span></p>
                                <p className='description'>Nubes Rotas</p>
                            </div>
                        </div>
                    </div>

                    <div className='weather-details'>
                        <div className='humidity'>
                            <FontAwesomeIcon className='icono' icon={faWater}/>
                            <div className='text'>
                                <div className='info-humidity'>
                                    <span>0%</span>
                                </div>
                                <p>Humedad</p>
                            </div>
                        </div>
                        <div className='wind'>
                            <FontAwesomeIcon className='icono' icon={faWind}/>
                            <div className='text'>
                                <div className='info-wind'>
                                    <span>0Km/h</span>
                                </div>
                                <p>Velocidad Viento</p>
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