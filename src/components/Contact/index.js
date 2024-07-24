import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timeout);  // Cleanup the timeout
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm('service_byxs3kh',
                'template_581e8xf',
                refForm.current,
                '1MrdO7axAw4bJEQNG'
            )
            .then(
                () => {
                  alert('Mensaje enviado!')
                  window.location.reload(false)
                },
                () => {
                  alert('Fallo en envío, por favor intente de nuevo')
                }
              )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                       <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','á','c','t','a','m','e']} idx={15}/>
                    </h1>
                    <p>
                    Estoy interesada en cualquier propuesta que se alinee con mis conocimientos y habilidades. Sin embargo,
                    si tiene otras preguntas o peticiones, siéntase libre de contactarme usando el formulario.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='user_name' placeholder='Nombre' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='user_email' placeholder='Correo Electrónico' required/>
                                </li>
                                <li>
                                    <input placeholder='Tema' type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Mensaje'name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="ENVIAR"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='map-wrap'> 
                    <MapContainer center={[4.6541,-74.0851]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                         <Marker position={[4.6541,-74.0851]}>
                            <Popup> Esta es Bogotá :)</Popup>
                         </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact