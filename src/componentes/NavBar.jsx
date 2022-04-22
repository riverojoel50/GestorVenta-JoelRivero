const NavBar = (props) => {
    return (
        <>
            <h1>Mi listado</h1>
            <nav className="navbar">
                <p className="font-red" href="#">{props.item1}</p>
                <p className="font-red" href="#">{props.item2}</p>
                <p className="font-red" href="#">{props.item3}</p>
            </nav>
        </>
    );
}


export default NavBar