import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({item}) => {
  return (
    <div className='item-pre' key={item.id}>
      <img className='img-pre' src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Género: {item.gender}</p>
      <p>Precio: ${item.price}</p>
      <Link to = {`/detail/${item.id}`}>Ver Detalle</Link>
    </div>
  )
}

export default Item
