import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faJava, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timeout);  // Cleanup the timeout
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['S','o','b','r','e',' ','m','i']} idx={15}/>
                    </h1>
                    <p>
                        Soy estudiante de ingeniería en el octavo semestre y estoy buscando ser parte de una 
                        compañía de IT que desarrolle proyectos diversos y desafiantes.
                    </p>
                    <p>
                        Me destaco por ser una pensadora crítica y proactiva. Mi enfoque en la excelencia, mi 
                        eficiencia y puntualidad son rasgos que me caracterizan.
                    </p>
                    <p>
                        Estoy entusiasmada por seguir contribuyendo al campo de la ingeniería con compromiso.
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color='#646464' />
                        </div>  
                        <div className='face2'>
                            <FontAwesomeIcon icon={faReact} color='#61dbfb' />
                        </div>  
                        <div className='face3'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>  
                        <div className='face4'>
                            <FontAwesomeIcon icon={faNodeJs} color='#68A063' />
                        </div>  
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJava} color='#f89820' />
                        </div>  
                        <div className='face6'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>  
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About;