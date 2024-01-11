import ProductList from "./ProductList"
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Products = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0) // Reset the scroll.
    }, [location.pathname])

    return (
        <>
            <div className='products-card-container'>
                <ProductList/>
            </div>
        </>
    )     
}

export default Products