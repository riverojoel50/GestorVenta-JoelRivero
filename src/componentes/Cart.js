import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, removeItem } = useCartContext();
    const [totalCompra, setTotalCompra] = useState(0);


    const itemCart = cart.map(item => (
            <div>
                <h2>{ item.name }</h2>
                <h3>Cantidad: { item.cantidadCompra }</h3>
                <h3>Precio: { item.precio }</h3>
                <h3>Total: { item.precio * item.cantidadCompra }</h3>
    
                <br></br>
    
                <button onClick={() => removeItem(item.id)}>borrar Item</button>
            </div>
            
        ));

    

    return (
        <div>
            {itemCart}
            <h1>Total Compra:</h1>
        </div>
    );
}

export default Cart