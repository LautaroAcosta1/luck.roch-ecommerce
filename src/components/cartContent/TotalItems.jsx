import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const TotalItems = () => {
    const { cart } = useContext(dataContext)

    const itemsQuantity = cart.reduce((acum, elem) => acum + elem.quantity, 0)

    return (
        <span className="number">
            {itemsQuantity}
        </span>
    )
}

export default TotalItems