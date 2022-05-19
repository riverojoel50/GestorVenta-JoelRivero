import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {articulos as articulosData} from "../data/articulos"
import "../assets/style/ItemDetail.css"

const ItemDetail = (props) => {
    const { addItem, isInCart } = useContext(CartContext)

    const addCart = () => {
        
        if (!isInCart(props.id))
        {
            console.log("Resultado IsnInCart: " + isInCart(props.id))
            const cantidadArticulo = prompt("ingrese cantidad");
            const articulo = getArticulo();
            
            addItem(articulo,cantidadArticulo)
        }
        else   
            alert("El articulo ya se encuentra en el carrito")
    }

    const getArticulo = () => {
        return articulosData.find(p => p.id == props.id)
    }

    return(

        <div className="item">
            <h2>Articulo</h2>
            <h2>{props.name}</h2>
            <img src={props.imgUrl} alt={props.name}/>
            <h3>{props.precio}</h3>
            <button onClick={addCart}>Comprar</button>
        </div>
    );
}

export default ItemDetail