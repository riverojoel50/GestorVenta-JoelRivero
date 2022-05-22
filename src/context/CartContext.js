import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
    cart:[], //valor default
    addItem: () => {},
    removeItem: () => {},
    clear: () => {},
    isInCart: () => {}
})


export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cart,setCart] = useState([]) 

    const addItem = (article,cantidadArticulo) => {
        const itemToCart = {...article, cantidadCompra: cantidadArticulo}

        isInCart(article.id) === false && setCart( currentCart => { return [...currentCart, itemToCart] })

    }

    const removeItem = (id_articulo) => {
        for(const oneCart of cart){
            if(oneCart.id == id_articulo)
                console.log(cart.indexOf(oneCart))
                setCart(cart.splice(cart.indexOf(oneCart), 1))
        }

        console.table(cart)
    }

    const clear = () => {
        setCart(cart.splice(0,cart.length))
    }

    const isInCart = (id_articulo) => {
        return cart.some((p) => p.id === id_articulo)
    }

    return (
        <CartContext.Provider value={{cart, addItem, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider