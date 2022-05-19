import { useContext } from "react"

const Cart = () => {
    const {cart} = useContext

    return (
        cart.Map((oneCart) => {
            <div class = "article">
                <h2>{oneCart.articuloDetalle.name}</h2>
                <img src={oneCart.imgUrl} alt={oneCart.name}></img>
                <p>{oneCart.cantidad}</p>
                <p>{oneCart.cantidad * oneCart.articuloDetalle.precio}</p>
            </div>
        })
    );
}

export default Cart