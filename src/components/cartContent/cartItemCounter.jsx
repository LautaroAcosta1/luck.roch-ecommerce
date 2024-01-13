import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const CartItemCounter = ({product}) => {
    const { cart, setCart, buyProducts } = useContext(dataContext)

    const decrese = () => {
        const productRepeat = cart.find((item) => item.id === product.id)

        productRepeat.quantity !== 1 && setCart(cart.map((item) => (item.id === product.id ? {...product, quantity: productRepeat.quantity - 1} : item)))
    }

    return (
        <>
            <div className="counter-container">
                <button className="btnCounter" onClick={decrese}>
                    -
                </button>
                <p className="quantity">
                    {product.quantity}
                </p>
                <button className="btnCounter" onClick={() => buyProducts(product)}>
                    +
                </button>
            </div>
        </>
    )
}

export default CartItemCounter
