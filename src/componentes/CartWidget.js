let styleImage = {
    width:"130px",
    height:"110px"
}

const CartWidget = (props) => {
    return(
        <img style={styleImage} src={props.urlImage} alt="logo_navbar"/>
    )
}


export default CartWidget