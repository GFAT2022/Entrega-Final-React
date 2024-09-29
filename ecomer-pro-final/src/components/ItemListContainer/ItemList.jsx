import React from "react";
import Item from "./Item";
import './ItemList.css'


const ItemList = ({items}) => {
    return (
        <div className="ItemFull">
            {items.map((el, i)=>(
                <Item key={i} item={el}/>
            ))}
        </div>
    )
}

export default ItemList