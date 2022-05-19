import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {articulos as articulosData} from "../data/articulos"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const {categoriaId} = useParams()
    const [articulos, setArticulos] = useState([]);

    
    useEffect(() =>{
        (async () => {
            const articuloCategoria = await getArticulos();

            if(articuloCategoria)
                setArticulos(articuloCategoria);
        })()

    },[categoriaId]);

    const getArticulos = () => {
        {console.log(categoriaId)}
        return new Promise((resolve) =>{
             setTimeout(() =>{
                 resolve( categoriaId ? articulosData.filter((cat) => cat.categoria == categoriaId) : articulosData)
             },1000);
         });
     } 


    return(
        <>
            <h1>Listado Articulos</h1>
            <ItemList Item={articulos} />

        </>
    )
}

export default ItemListContainer