import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { CreateOrder } from "../data/firebase/firebase";

const Cart = () => {
    const { cart, removeItem } = useCartContext();
    const [ saveOrder, setSaveOrder ] = useState(false);
    const componentsImages = require.context("../assets/img", true);

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

    const saveListBuy = () => {
        const oneListBuy = {
            comprador: {nombre: "Joel", Dni:"12345678", email: "admin_venta@gmail.com"},
            items: cart.map((item) => { return {id: item.id, name: item.name, categoria: item.categoria, precio: item.precio, cantidad: item.cantidadCompra } }),
            total: sumPrecio()
        }

        CreateOrder(oneListBuy);
        setSaveOrder(true);
        //clearCart();
    }

    const itemCart = cart.map(item => (
        <div key={item.id}>
            <table className="table w-full">
                <thead></thead>
                <tbody>
                <tr>
                    <th>{item.id}</th>
                    <td><img src= {componentsImages("./" + item.imgUrl)}  alt={item.name} style= {{width:"60px"}}/></td>
                    <td>{ item.name }</td>
                    <td>{ "$" + item.precio }</td>
                    <td>{ item.cantidadCompra }</td>
                    <td>{"$" + item.precio * item.cantidadCompra }</td>
                    <td><button onClick={() => removeItem(item.id)} className="btn btn-xs">Delete</button></td>
                </tr>
                </tbody>
            </table>
        </div>
        
        ));

    

    return (
            <div>
                { isEmptyCart() ? <h1>Carrito Vacio...</h1> : itemCart }

                {!saveOrder && <button className="btn" onClick={saveListBuy}>Realizar Compra!</button>}
            </div>



    );
}

export default Cart