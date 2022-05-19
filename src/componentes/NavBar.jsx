import CartWidget from "./CartWidget";
import logoPagina from "../assets/img/logo.png"
import logoCarrito from "../assets/img/logoCarrito.png"
import { Link } from "react-router-dom";
import "../assets/style/Navbar.css"


let item = {
    margin: '0px 10px'
}

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <CartWidget urlImage={logoPagina}/>
            </div>
            <div className="navbar-medium">
                <nav>
                    <Link to={`/categoria/Hombre`} style={item}> Hombre</Link>
                    <Link to={`/categoria/Mujer`} style={item} >Mujer</Link>
                    <Link to={`/categoria/Bebe`} style={item} > Bebe</Link>
                </nav>
            </div>
            <div className="navbar-right">
                <CartWidget urlImage={logoCarrito}/>
            </div>
        </div>
        
    );
}


export default NavBar


