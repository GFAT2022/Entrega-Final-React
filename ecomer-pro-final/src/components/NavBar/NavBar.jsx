
import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext/CartContext";

const NavBar = () => {
  const { cart, selectCategory } = useContext(CartContext); 


  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <ul className="navbar">
      <NavLink to={'/'} onClick={() => selectCategory(null)}>EL PORTAL</NavLink>
      <NavLink to={'category/peliculas'} onClick={() => selectCategory("peliculas")}>Películas</NavLink>
      <NavLink to={'category/series'} onClick={() => selectCategory("series")}>Series</NavLink>
      <NavLink to={'/cart'}>🛒<span>{totalItems}</span></NavLink>
    </ul>
  );
};

export default NavBar;