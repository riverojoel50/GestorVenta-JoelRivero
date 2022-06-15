import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {articulos as articulosData} from "../data/articulos"
import { useParams } from "react-router-dom";
import { GetAllArticle } from "../data/firebase/firebase";

const ItemListContainer = () => {
    const {categoriaId} = useParams()
    const [articulos, setArticulos] = useState([]);

    
    // useEffect(() =>{
    //     (async () => {
    //         const articuloCategoria = await getArticulos();

    //         if(articuloCategoria)
    //             setArticulos(articuloCategoria);
    //     })()

    // },[categoriaId]);

    // const getArticulos = () => {
    //     return new Promise((resolve) =>{
    //          setTimeout(() =>{
    //              resolve( categoriaId ? articulosData.filter((cat) => cat.categoria === categoriaId) : articulosData)
    //          },1000);
    //      });
    // } 

    useEffect(() => {
        GetAllArticle().then(result => {
            setArticulos(result);
        })
    },[categoriaId]);



    return(
        <>
            <h1>Listado Articulos</h1>
            <ItemList Item={articulos} />

            {console.log(articulos)}

        </>
    )
}

export default ItemListContainer