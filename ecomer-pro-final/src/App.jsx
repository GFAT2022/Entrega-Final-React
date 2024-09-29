import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import CartDetail from "./components/Cart/Cart"
import CartContextProvider from "./context/CartContext/CartContextProvider";


const App = () => {

  return(
  <>
    <CartContextProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<CartDetail/>}/>
      </Routes>
    </CartContextProvider>
  </>
  )

}


export default App