import CartElements from './CartElements';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import { Link } from 'react-router-dom';
import './cartContent.css'

const CartContent = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0) // Reset the scroll.
    }, [location.pathname])

    const {cart} = useContext(dataContext)

    return cart.length > 0 ? (
        <>
            <div className='cartContent-container'>
                <div className="cartElements-container">
                    <CartElements/>
                </div>
                <div className='cartTotal-container'>
                    <CartTotal/>
                    <div className='advertising'>
                        <p>publicidad</p>
                    </div>
                </div>
            </div>
        </>
        
    ) : (
        <>
            <div className='emptyCart-container'>
                <i className="fa-solid fa-cart-plus" id='emptyCart'></i>
                <Link className="continueBuy" to={'/products'}>Empezar a comprar!</Link>
            </div>
        </>
    )
}

export default CartContent