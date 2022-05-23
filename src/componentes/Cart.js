import { useCartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, removeItem } = useCartContext();

    const sumPrecio = () => {
        let sumPrecioTotal = 0;

        cart.map(item => (sumPrecioTotal += item.precio * item.cantidadCompra))

        return sumPrecioTotal;
    }

    const isEmptyCart = () => {
        if (cart.length > 0)
            return false 
        else 
            return true
    }

    const itemCart = cart.map(item => (
        <div >
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
            
            {console.log(isEmptyCart())}
            { isEmptyCart() ? <h1>Carrito Vacio...</h1> : itemCart }
            
            <h1>Total Compra: {sumPrecio()}</h1>
        </div>
    );
}

export default Cart