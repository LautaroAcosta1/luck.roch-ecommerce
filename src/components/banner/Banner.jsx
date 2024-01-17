import Carousel from 'react-bootstrap/Carousel';
import './banner.css'

const Banner = () => {
    return (
        <>
            <div className='carousel-container'>
                <Carousel data-bs-theme="dark" className='carousel'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/imagen1.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/imagen2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/imagen3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
        
    )
}

export default Banner