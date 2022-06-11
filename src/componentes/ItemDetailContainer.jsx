import { useEffect, useState } from "react"
import {useParams } from "react-router-dom"
import {articulos as articulosData} from "../data/articulos"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const {articuloId} = useParams()
    const [articulo, SetArticuloData] = useState({})
    const [loading, setLoading] = useState(true)
    
    
    useEffect( () => {
        (async () => {
            const articuloData = await getArticuloDetalle();

            if (articuloData){
                SetArticuloData(articuloData);
                setLoading(false) 
            }
            
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
        loading ? <h1>Cargando...</h1> : <ItemDetail article={articulo}/>
    )
}

export default ItemDetailContainer