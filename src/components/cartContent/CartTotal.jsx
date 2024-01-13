import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const CartTotal = () => {
    const {cart} = useContext(dataContext)

    const total = cart.reduce((acum, elem) => acum + elem.price * elem.quantity, 0)

    return (
        <div className="cartTotal">
            <h1 className="cartTotal-text">Resumen de compra</h1>
            <div class="horizontal-line"></div>
            <h2 className="cartTotal-subtotal">SubtotaL ${total}</h2>
            <h3 className="cartTotal-total">Total ${total}</h3>
        </div>
    )
}

export default CartTotal