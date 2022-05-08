import { Link } from "react-router-dom";

const Item = (props) => {
    return(
        <div className="item">
            <Link to={`/detalles/${props.id}`}>
                <h2>{props.name}</h2>
            </Link>
            <img src={props.imgUrl} alt={props.name}/>
            <h3>{props.precio}</h3>
        </div>

    );
}

export default Item;