import { useState } from "react"

let spantCount = {
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const ItemCount = (props) => {
    const [count, setCount] = useState(props.value)

    const addCount = () => {
        count < props.article.cantidad && setCount((currentCount) => { return currentCount + 1 })
    }

    const subtractOne = () => {
        count > 1 && setCount((currentCount) => { return currentCount - 1 })
    }

    return (
        <div>
            <p>Cantidad:</p>

            <div className="btn-group">
                <button onClick={subtractOne} className="btn">-</button>
                <span style={spantCount}> {count} </span>
                <button onClick={addCount}className="btn">+</button>
            </div>
            <br/>
            {/* <button onClick={ () => props.onAdd(count)}>Agregar Carrito</button> */}
            <button className="btn btn-primary" onClick={ () => props.onAdd(count)} >Agregar Carrito</button>

        </div>
    )
}

export default ItemCount