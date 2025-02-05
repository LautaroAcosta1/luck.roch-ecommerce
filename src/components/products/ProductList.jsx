import { useContext, useState, useEffect } from "react";
import { dataContext } from "../context/DataContext";
import axios from "axios";
import './productList.css'

const ProductList = () => {
    const [data, setData] = useState([]);
    const {buyProducts} = useContext(dataContext)

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then((res) => setData(res.data))
            .catch(error => {
                console.error("Hubo un error al obtener los productos:", error);
            });
    }, []);

    return data.map((product) => {
        return (
                <div className="card-container" key={product.id}>
                    <div className="image-container">
                        <img className="card-image" src={product.image} alt={product.name}/>
                    </div>
                    <h3 className="card-name">{product.name}</h3>
                    <p className="card-description">{product.description}</p>
                    <h2 className="card-price">${product.price}</h2>
                    <button type="button" className="button" onClick={() => buyProducts(product)}>
                        <span className="button__text">Agregar</span>
                        <span className="button__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="svg">
                                <line y2="19" y1="5" x2="12" x1="12"></line>
                                <line y2="12" y1="12" x2="19" x1="5"></line>
                            </svg>
                        </span>
                    </button>
                </div>
        )
    })
}
export default ProductList