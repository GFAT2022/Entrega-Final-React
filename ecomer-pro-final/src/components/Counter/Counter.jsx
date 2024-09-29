import React, {useState} from "react";
import './Counter.css'

const Counter = ({onAdd, text = "Agregar al carrito", q = 1}) => {
    const [count,setCount] = useState(q);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return(
        <div className="counter">
            <button className="counter__button" onClick={decrement}>-</button>
            <span className="counter__count">{count}</span>
            <button className="counter__button" onClick={increment}>+</button>
            <button className="counter__add-to-cart" onClick={()=> onAdd(count)}>
                {text}
            </button>
        </div>
    );
};

export default Counter