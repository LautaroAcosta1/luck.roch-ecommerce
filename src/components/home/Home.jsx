import Banner from '../banner/Banner'
import AboutUs from '../aboutUs/AboutUs'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0) // Reset the scroll.
    }, [location.pathname])

    return (
        <>
            <Banner/>
            <AboutUs/>
        </>
    )
}

export default Home