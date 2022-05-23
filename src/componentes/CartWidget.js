import { useCartContext } from "../context/CartContext";

let styleImage = {
    width:"130px",
    height:"110px"
}

let contenedor = {
    position: "relative",
    display: "inline-block",
    textAlign: "center"
}

let cantidadItem = {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "30px",
    color: "red"
}

const CartWidget = (props) => {
    const { cart } = useCartContext();

    const countCart = () => {
        return cart.length
    }

    return(
        <div style={contenedor}>
            <img style={styleImage} src={props.urlImage} alt="logo_navbar"/>
            <div style={cantidadItem}>
                {countCart() == 0 ? '' : countCart()}
            </div>
        </div>
    )
}


export default CartWidget