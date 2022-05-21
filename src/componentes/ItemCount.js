import { useState } from "react"

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
            <button onClick={subtractOne}>-</button>
            <span> {count} </span>
            <button onClick={addCount}>+</button>
            <br/>
            <br/>
            <button onClick={ () => props.onAdd(count)}>Agregar Carrito</button>

        </div>
    )
}

export default ItemCount