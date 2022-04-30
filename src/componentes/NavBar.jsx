import CartWidget from "./CartWidget";
import carrito from "../assets/img/carrito.png"

const NavBar = (props) => {
    return (
        <>
            <CartWidget urlImage={carrito}/>
            <h1>Mi listado</h1>
            <nav className="navbar">
                <p className="font-red" href="#"> Item 1</p>
                <p className="font-red" href="#"> Item 2</p>
                <p className="font-red" href="#"> Item 3</p>
            </nav>
        </>
    );
}


export default NavBar