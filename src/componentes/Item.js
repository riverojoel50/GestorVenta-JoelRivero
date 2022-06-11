import { Link } from "react-router-dom";

const Item = (props) => {
    const componentsImages = require.context("../assets/img", true); 

    return(
        <div style={{margin:"0px 15px"}}>
            <div className="card card-compact w-60 bg-base-100 shadow-xl">
                <figure><img src= {componentsImages("./" + props.imgUrl)} alt={props.name} /></figure>
                <div className="card-body h-auto">
                    <h2 className="card-title"><Link to={`/detalles/${props.id}`}>{props.name}</Link></h2>
                    <p>{`${props.descripcion}`}</p>
                </div>
            </div>
        </div>

        // <div className="item" key={props.id}>
        //     {console.log(`/detalles/${props.id}`)}
        //     <Link to={`/detalles/${props.id}`}>
        //         <h2>{props.name}</h2>
        //     </Link>
        //     <img src={props.imgUrl} alt={props.name}/>
        //     <h3>{props.precio}</h3>
        // </div>
    );
}

export default Item;