import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {articulos as articulosData} from "../data/articulos"

const ItemListContainer = () => {
    const [articulos, setArticulos] = useState([]);

    useEffect(() =>{
        console.log("Cargando Articulos..")

        const getArticulos = new Promise((resolve,reject) =>{
            setTimeout(() =>{
                resolve(articulosData)
            },0);
        });

        getArticulos
            .then((result) => setArticulos(result))
            .catch((error) => console.log(error))
    },[]);


    return(
        <>
            <h1>Listado Articulos</h1>
            <ItemList Item={articulos} />

        </>
    )
}

export default ItemListContainer