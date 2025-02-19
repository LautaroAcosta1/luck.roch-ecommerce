import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
    const {cart, setCart} = useContext(dataContext)

    const deleteProduct = (_id) => {
        const foundId = cart.find((elem) => elem._id === _id)

        const newCart = cart.filter((elem) => {
            return elem !== foundId
        })

        setCart(newCart)
    }

    return cart.map((product) => {
        return (
            <div className="cartContent" key={product._id}>
                <img className="image-cart" src={product.imageUrl} alt={product.name}/>
                <div className="name-cart-container">
                    <h3 className="name-cart">{product.name}</h3>
                </div>
                <div className="cart-itemCounter-container">
                    <CartItemCounter product={product}/>
                </div>
                <div className="price-cart-container">
                    <h4 className="price-cart">${product.price * product.quantity}</h4>
                </div>
                <div className="btnDelete-cart-container">
                    <button className="btnDelete-cart" onClick={() => deleteProduct(product._id)}>
                        <svg viewBox="0 0 448 512" className="svgIcon">
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        )
    })
}

export default CartElements