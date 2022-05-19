import { useEffect, useState } from "react"
import {useParams } from "react-router-dom"
import {articulos as articulosData} from "../data/articulos"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const {articuloId} = useParams()
    const [articulo, SetArticuloData] = useState( {} )
    
    
    useEffect( () => {
        (async () => {
            const articuloData = await getArticuloDetalle();

            if (articuloData) 
                SetArticuloData(articuloData);
            
        })()
    }, [articuloId]);
    
    const getArticuloDetalle = () => {
        return new Promise( (resolve) =>{
            setTimeout(() =>{
                resolve(articulosData.find(p => p.id == articuloId));
            },1000);
        })
    }
    
    return(

        <ItemDetail name={articulo.name} precio={articulo.precio} imgUrl={articulo.imgUrl} id={articuloId}/>
    )
}

export default ItemDetailContainer