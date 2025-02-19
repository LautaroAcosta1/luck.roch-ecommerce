import { createContext, useState, useEffect } from "react"


export const dataContext = createContext()

const DataProvider = ({children}) => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || []
    const [cart, setCart] = useState(savedCart)

    useEffect (() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    const buyProducts = (product) => {
        const productRepeat = cart.find((item) => item._id === product._id)

        if(productRepeat) {
            setCart(cart.map((item) => (item._id === product._id ? {...product, quantity: productRepeat.quantity + 1} : item)))
        } else {
            setCart([...cart, product])
        }
    }

    return (
        <dataContext.Provider value={{cart, setCart, buyProducts}}>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider