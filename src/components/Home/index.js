import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import Spline from '@splinetool/react-spline';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h','i','a','r','a',' ','V','.']
    const hiArray = ['H','o','l','a',',']
    const pArray = ['m','i',' ','n','o','m','b','r','e',' ','e','s']
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timeout);  // Cleanup the timeout
    }, [])

    return ( 
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1><AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={0}/> <br/> <AnimatedLetters letterClass={letterClass} strArray={pArray} idx={6}/> 
                <img src={LogoTitle} alt='desarrollador'/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={13}/>
                </h1>
                <h2>Ing. en Ciencias de la Computación e I.A.</h2>
                <Link to='/contact' className='flat-button'>CONTÁCTAME</Link>
            </div>
            <div className='animation'>
                <Spline scene="https://prod.spline.design/2H7TCptu3p-FHJL0/scene.splinecode" />
            </div>
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home;
