const Item = (props) => {
    return(
        <div class="item">
            <h2>{props.name}</h2>
            <img src={props.imgUrl} alt={props.name}/>
            <h3>{props.precio}</h3>
        </div>
    );
}

export default Item;