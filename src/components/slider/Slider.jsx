import React, { useState, useEffect } from 'react';
import './slider.css';

const Slider = () => {
    const phrases = [
        "¡Descuentos a partir de los $80.000!",
        "¡Envío gratis en todas las compras!",
        "¡Ofertas especiales solo hoy!",
];

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [animationActive, setAnimationActive] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimationActive(true);
            setCurrentPhraseIndex((prevIndex) => prevIndex === phrases.length - 1 ? 0 : prevIndex + 1);
    }, 3000);

    return () => clearInterval(intervalId);
    }, [phrases.length]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAnimationActive(false);
        }, 1000);

    return () => clearTimeout(timeoutId);
    }, [currentPhraseIndex]);

    return (
        <div className='slider-container'>
            <div className="slider">
                <p className={`slider-text ${animationActive ? 'fade-in' : ''}`}>
                    {phrases[currentPhraseIndex]}
                </p>
            </div>
        </div>
    );
};

export default Slider;


