import { useEffect, useState } from "react";
import { getArticulos } from "../utils/getArticulos"
import ItemList from "./ItemList";
/*
const ItemListContainer = (props) => {
    return (
        <>
            <h1>{props.mensaje}</h1>
        </>
    );
}*/

const ItemListContainer = () => {
    const [articulos, setArticulos] = useState([]);

    useEffect(() =>{
        getArticulos()
            .then((result) => setArticulos(result))
            .catch((error) => console.log(error));
    },[]);


    return(
        <>
            <h1>Listado Articulos</h1>
            <ItemList Item={articulos} />

        </>
    )
}

export default ItemListContainer