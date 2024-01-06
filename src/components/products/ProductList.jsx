import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import './productList.css'

const ProductList = () => {
    const {data, cart, setCart} = useContext(dataContext)

    const buyProducts = (product) => {
        console.log(product)
        setCart([...cart, product])
    }

    return data.map((product) => {
        return (
                <div className="card-container" key={product.id}>
                    <div className="image-container">
                        <img className="image" src={product.image} alt={product.name}/>
                    </div>
                    <h3 className="card-name">{product.name}</h3>
                    <p className="card-description">{product.description}</p>
                    <h2 className="card-price">${product.price}</h2>
                    <button type="button" className="button">
                        <span className="button__text" onClick={() => buyProducts(product)}>Agregar</span>
                        <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                    </button>
                </div>
        )
    })
}
export default ProductList