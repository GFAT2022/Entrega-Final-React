import { Children } from "react"
import { useState } from "react"
import CartContext from "./CartContext"

const CartContextProvider = ({children}) => {
    
    const[cart, setCart] = useState([])
    const [category, setCategory] = useState("");
    const addItem = (item, q) => {
        const existingItem = cart.find((el) => el.id === item.id);
    
        if (existingItem) {
          setCart(
            cart.map((el) =>
              el.id === item.id ? { 
              ...el, quantity: el.quantity + q } : el
            )
          )
        } else {
          setCart([...cart, { 
            ...item, quantity: q }])
        }
    }

      console.log({cart}) 

    const removeItem = (id) => {
        setCart(
            cart.filter((el)=>el.id !== id)
        )

    }

    const clear = () => {
        setCart([])
    }

    const getTotal = () => {
        return cart.reduce(
            (total, item) => total + item.price * item.quantity, 0
        )
    }


    const selectCategory = (newCategory) => {
      setCategory(newCategory);
    };

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        getTotal,
        category,
        selectCategory,
    }

    return(
        <CartContext.Provider value={values}>
            {children}    
        </CartContext.Provider>
    )
}

export default CartContextProvider