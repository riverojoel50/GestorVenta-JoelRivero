import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "../assets/style/ItemDetail.css"
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
    const { addItem } = useCartContext();
    const [isinCart, setIsInCart] = useState(false);
    const componentsImages = require.context("../assets/img", true); 


    const onAdd = (count) => {
        setIsInCart(true)
        addItem(props.article,count)
    }

    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src= {componentsImages("./" + props.article.imgUrl)}  alt={props.article.name} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{props.article.name}</h1>
                    <p className="py-6">{props.article.descripcion}</p>
                    {!isinCart ? <ItemCount onAdd={onAdd} article={props.article} value={1}></ItemCount> : <Link to={`/cart`}> Terminar Compra</Link>}
                </div>
            </div>
        </div>

        // <div className="item">
        //     <h2>Articulo</h2>
        //     <h2>{props.article.name}</h2>
        //     <img src={props.article.imgUrl} alt={props.article.name}/>
        //     <h3>{props.article.precio}</h3>
            
        //     {!isinCart ? <ItemCount onAdd={onAdd} article={props.article} value={1}></ItemCount> : <Link to={`/cart`}> Terminar Compra</Link>}

        // </div>
    );
}

export default ItemDetail