import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './banner.css'

const Banner = () => {
    return (
        <div className='carousel-container'>
            <div className='texto-container'>
                <h1 className='titulo'>Descubri las mejores ofertas</h1>
                <h2 className='subtitulo'>Encontra prendas de alta calidad a precios increibles.</h2>
                <Button href={"/products"} className='btn'>Explorar</Button>
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