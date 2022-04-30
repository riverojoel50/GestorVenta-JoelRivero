let styleImage = {
    display: "inline-block",
    width:"40px",
    height:"40px"
}

const CartWidget = (props) => {
    return(
        <img style={styleImage} src={props.urlImage} alt="logo_navbar"/>
    )
}


export default CartWidget