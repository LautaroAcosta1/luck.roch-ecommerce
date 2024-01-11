import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import './cartContent.css'

const CartElements = () => {
    const {cart} = useContext(dataContext)

    return cart.map((product) => {
        return (
            <div className="cartContent" key={product.id}>
                <img className="image-cart" src={product.image} alt={product.name}/>
                <h3 className="name-cart">{product.name}</h3>
                <h4 className="price-cart">${product.price}</h4>
            </div>
        )
    })
}

export default CartElements