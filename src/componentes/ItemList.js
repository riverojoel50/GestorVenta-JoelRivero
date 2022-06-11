import Item from "./Item"

let content = {
    display: "flex",
    justifyContent: "center",
}

const ItemList = (props) => {
    let itemList = props.Item.map((articulo) => 
        <Item key={articulo.id} name={articulo.name} precio={articulo.precio} imgUrl={articulo.imgUrl} id={articulo.id} descripcion={articulo.descripcion}/>
    );


    console.log(itemList);
    return(
        <div style={content}>
            {itemList}
        </div>
    )
}

export default ItemList