import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './banner.css'

const Banner = () => {

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
        simulateNetworkRequest().then(() => {
        setLoading(false);
        });
    }}, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <div className='carousel-container'>
            <div className='texto-container'>
                <h1 className='titulo'>Descubri las mejores ofertas</h1>
                <h2 className='subtitulo'>Encontra prendas de alta calidad a precios increibles.</h2>
                <Button className='boton' disabled={isLoading} onClick={!isLoading ? handleClick : null}>
                    {isLoading ? 'Cargando...' : 'Explorar'}
                </Button>
            </div>
            <Carousel data-bs-theme="dark" className='carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="imagen1.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="imagen2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="imagen3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner