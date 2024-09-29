import React from "react";
import Counter from '../Counter/Counter'
import './ItemDetail.css'

const ItemDetail = ({item, onAdd}) => {
    return(
    <div className="item-ii-full">
        <img className="image-ii" src={item.img} alt={item.name} />
        <div className="item-info">
            <h3 className="item-T">{item.name}</h3>
            <p className="item-P">Reparto: {item.actors}</p>
            <p className="item-P">Genero: {item.gender}</p>
            <p className="Item-P"> {item.Information}</p>
            <p className="item-pp">Precio: ${item.price}</p>
            <Counter onAdd={onAdd}/>
        </div>
    </div>   
    )
}

export default ItemDetail