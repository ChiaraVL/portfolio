import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSearch, faWater, faWind } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from "react-loaders";
import Clear from '../../assets/images/clear.png';
import Rain from '../../assets/images/rain.png';
import Snow from '../../assets/images/snow.png';
import Clouds from '../../assets/images/cloud.png';
import Mist from '../../assets/images/mist.png';
import NF from '../../assets/images/404.png'
import './index.scss';

const Weather = () => {

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');
    const APIKey = '971587d23518daba5cda5745cf0e83ed';

    const fetchWeatherData = () => {
        if (city === '') return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}&lang=es`)
            .then(response => response.json())
            .then(json => {

                if (json.cod === '404') {
                    setNotFound(true);
                    setWeatherData(null);
                    return;
                }

                setNotFound(false);

                let weatherImage;
                switch (json.weather[0].main) {
                    case 'Clear':
                        weatherImage = Clear;
                        break;
                    case 'Rain':
                        weatherImage = Rain;
                        break;
                    case 'Snow':
                        weatherImage = Snow;
                        break;
                    case 'Clouds':
                        weatherImage = Clouds;
                        break;
                    case 'Mist':
                        weatherImage = Mist;
                        break;
                    default:
                        weatherImage = Clouds;
                        break;
                }

                setWeatherData({
                    image: weatherImage,
                    temperature: json.main.temp,
                    description: json.weather[0].description,
                    humidity: json.main.humidity,
                    windSpeed: json.wind.speed,
                });
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                setNotFound(true); // Handle fetch errors as not found
                setWeatherData(null);
            });
    };

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
                        <FontAwesomeIcon className='icon' icon={faLocationDot} color='#E3A5C7'/>
                        <input 
                            type='text' 
                            placeholder='Ingresa tu ubicación' 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button onClick={fetchWeatherData}>
                            <FontAwesomeIcon icon={faSearch} color='#E3A5C7'/>
                        </button>
                    </div>
                    {weatherData && (
                        <div className='weather-box'>
                            <div className='info-weather'>
                                <div className='weather'>
                                    <img src={weatherData.image} alt='clima'/>
                                    <p className='temperature'>{weatherData.temperature}<span>°C</span></p>
                                    <p className='description'>{weatherData.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {weatherData && (
                        <div className='weather-details'>
                            <div className='humidity'>
                                <FontAwesomeIcon className='icono' icon={faWater}/>
                                <div className='text'>
                                    <div className='info-humidity'>
                                        <span>{weatherData.humidity}%</span>
                                    </div>
                                    <p>Humedad</p>
                                </div>
                            </div>
                            <div className='wind'>
                                <FontAwesomeIcon className='icono' icon={faWind}/>
                                <div className='text'>
                                    <div className='info-wind'>
                                        <span>{weatherData.windSpeed}Km/h</span>
                                    </div>
                                    <p>Vientos</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {notFound && (
                        <div className='not-found'>
                            <div className='box'>
                                <img src={NF} alt='No se encuentra'/>
                                <p>Upps! <br/> No encontramos la ubicación!</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Weather;
