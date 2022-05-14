import Item from "./Item"

const ItemList = (props) => {
    let itemList = props.Item.map((articulo) => 
        <Item key={articulo.id} name={articulo.name} precio={articulo.precio} imgUrl={articulo.imgUrl} id={articulo.id}/>
    );


    console.log(itemList);
    return(
        <div>
            {itemList}
        </div>
    )
}

export default ItemList