import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "../assets/style/ItemDetail.css"
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
    const { addItem } = useCartContext();
    const [isinCart, setIsInCart] = useState(false);

    const onAdd = (count) => {
        setIsInCart(true)
        addItem(props.article,count)
    }

    return(

        <div className="item">
            <h2>Articulo</h2>
            <h2>{props.article.name}</h2>
            <img src={props.article.imgUrl} alt={props.article.name}/>
            <h3>{props.article.precio}</h3>
            
            {!isinCart ? <ItemCount onAdd={onAdd} article={props.article} value={1}></ItemCount> : <Link to={`/cart`}> Terminar Compra</Link>}

        </div>
    );
}

export default ItemDetail