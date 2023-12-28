import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import './productList.css'

const ProductList = () => {
    const {data} = useContext(dataContext)

    return data.map((product) => {
        return (
                <div className="card-container">
                    <div className="image-container">
                        <img className="image" src={product.image} alt={product.name}/>
                    </div>
                    <h3 className="card-name">{product.name}</h3>
                    <p className="card-description">{product.description}</p>
                    <h2 className="card-price">${product.price}</h2>
                    <button type="button" class="button">
                        <span class="button__text">Agregar</span>
                        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                    </button>
                </div>
        )
    })
}
export default ProductList