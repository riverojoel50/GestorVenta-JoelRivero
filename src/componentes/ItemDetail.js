
const ItemDetail = (props) => {
    return(

        <div className="item">
            <h2>Articulo</h2>
            <h2>{props.name}</h2>
            <img src={props.imgUrl} alt={props.name}/>
            <h3>{props.precio}</h3>
            
        </div>
    );
}

export default ItemDetail