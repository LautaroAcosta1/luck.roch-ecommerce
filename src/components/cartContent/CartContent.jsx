import CartElements from "./CartElements"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const CartContent = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0) // Reset the scroll.
    }, [location.pathname])

    return <CartElements/>
}

export default CartContent