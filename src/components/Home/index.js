import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo_n.png';
import './index.scss';

const Home = () => {
    
    return ( 
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hola, <br/> mi nombre es 
                <img src={LogoTitle} alt='desarrollador'/>
                hiara V.</h1>
                <h2>Ing. en Ciencias de la Computación e I.A.</h2>
                <Link to='/contact' className='flat-button'>CONTÁCTAME</Link>
            </div>
        </div>
    );
}


export default Home;