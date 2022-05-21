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
        console.table(article)
        console.table(cart)
        const itemToCart = {...article, cantidadCompra: cantidadArticulo}

        isInCart(article.id) === false && setCart( currentCart => { return [...currentCart, itemToCart] })
        // const cartDetalle = {
        //     articuloDetalle: articulo,
        //     cantidad: cantidadArticulo
        // }
        
        // const newCart = cart.push(cartDetalle)

        // setCart( currentCart => {
        //     return currentCart.concat(cartDetalle)
        // })
    }

    const removeItem = (id_articulo) => {
        console.table(cart)
        for(const oneCart of cart){
            if(oneCart.articulo.id_articulo == id_articulo)
                setCart(cart.splice(cart.indexOf(oneCart), 1))
        }

        console.table(cart)
    }

    const clear = () => {
        setCart(cart.splice(0,cart.length))
    }

    const isInCart = (id_articulo) => {

        return cart.some((p) => p.id === id_articulo)

        // for(const oneCart of cart){
        //     console.table(oneCart.articuloDetalle.id)
        //     if(oneCart.articuloDetalle.id == id_articulo)
        //         return true
        // }
    }

    return (
        <CartContext.Provider value={{cart, addItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider