import CartWidget from "./CartWidget";
import carrito from "../assets/img/carrito.png"
import { Link } from "react-router-dom";

const NavBar = (props) => {
    return (
        <>
            <CartWidget urlImage={carrito}/>
            <h1>Mi listado</h1>
            <nav className="navbar">
                <Link to={`/categoria/Hombre`}><p className="font-red"> Hombre</p></Link>
                <Link to={`/categoria/Mujer`}><p className="font-red"> Mujer</p></Link>
                <Link to={`/categoria/Bebe`}><p className="font-red"> Bebe</p></Link>
            </nav>
        </>
    );
}


export default NavBar