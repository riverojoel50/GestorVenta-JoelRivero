import { useCartContext } from "../context/CartContext";

const Cart = () => {
    const {cart} = useCartContext();

    return (
        <div>

            <h1>Carrito</h1>
            {console.log(cart)}
            {/* {cart.map((oneCart) => {
                <div>
                    <h1>asd</h1>
                    <h2>{oneCart.name}</h2>
                    <img src={oneCart.imgUrl} alt={oneCart.name}></img>
                    <p>{oneCart.cantidad}</p>
                    <p>{oneCart.cantidad * oneCart.precio}</p>
                </div>
            })} */
             cart.forEach((element) => {
                 <div>
                    <h1>asd</h1>
                    <h2>{element.name}</h2>
                    <img src={element.imgUrl} alt={element.name}></img>
                 </div>
                })
            }
        </div>
    );
}

export default Cart