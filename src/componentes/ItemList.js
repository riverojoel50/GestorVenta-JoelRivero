import Item from "./Item"

const ItemList = (props) => {
    let itemList = props.Item.map((articulo) => 
        <Item name={articulo.name} precio={articulo.precio} imgUrl={articulo.imgUrl}></Item>
    );


    console.log(itemList);
    return(
        <div>
            {itemList}
        </div>
    )
}

export default ItemList