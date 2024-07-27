import React, { useEffect, useState } from "react";
import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from '../../data/portfolio.json';

// Importar imágenes
import EEG from '../../assets/projects/EEG.png';
import Reconocimiento from '../../assets/projects/reconocimiento.jpeg';
import RUTA from '../../assets/projects/RUTA.png';

const images = {
    "EEG.png": EEG,
    "reconocimiento.jpeg": Reconocimiento,
    "RUTA.png": RUTA,
};

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeout);  // Cleanup the timeout
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="box" key={idx}>
                                <div className="face front">
                                    <img src={images[port.cover]} className="portfolio-image" alt="portfolio" />
                                    <h3>{port.title}</h3>
                                </div>    
                                <div className="face back">
                                    <h3 className="title">{port.title}</h3>
                                    <p className="description">{port.description}</p>
                                    <button className="btn" onClick={() => window.open(port.url)}>Abrir código fuente</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    };

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters strArray={"Proyectos".split("")} idx={15} letterClass={letterClass} />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Portfolio;
