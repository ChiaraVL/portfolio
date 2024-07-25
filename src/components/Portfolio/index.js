import React, { useEffect, useState } from "react";
import './index.scss'
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timeout);  // Cleanup the timeout
    }, [])

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="box" key={idx}>
                                <img src={port.cover} className="portfolio-image" alt="portfolio" onClick={() => window.open(port.url)}/>
                                <div className="content">
                                    <h2 className="title">{port.title}</h2>
                                    <p className="description">{port.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

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
    )   
}

export default Portfolio