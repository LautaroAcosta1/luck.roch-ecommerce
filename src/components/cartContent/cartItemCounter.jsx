
const cartItemCounter = () => {
    return (
        <>
            <div className="counter-container">
                <button className="btnCounter" onClick={decrese}>
                    -
                </button>
                <p className="quanty">
                    {product.quantity}
                </p>
                <button className="btnCounter" onClick={() => buyProducts(product)}>
                    +
                </button>
            </div>
        </>
    )
}

export default cartItemCounter
