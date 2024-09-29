import React, {createContext, useContext, useState} from "react";
import './Cart.css'
import Form from "../Form/Form"
import CartContext from "../../context/CartContext/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const CartDetail = () => {

    const[orderId, setOrderId] = useState("")
    const {cart, removeItem, getTotal, clear, } = useContext(CartContext)
    
    const [buyer, setBuyer] = useState({
        name: "",
        email: ""
    })
    const [error, setError] = useState({
        name: "",
        email: ""
    })
    const handleChage = (e) => {
        setBuyer({...buyer,[e.target.name]: e.target.value});
        setError({...error, [e.target.name]:""})
    }
   
    const submit = (e) => {
        e.preventDefault()
        const localError = {}
        if(!buyer.name) {
            localError.name = "El nombre es obligatorio"
        }
        if (!buyer.email) {
            localError.email = "El email es obligatorio"
        }

        if (Object.keys(localError).length === 0) {
            addOrder();
            setError({});
        }else {
            setError(localError)
        }
    }

    const addOrder = () =>{
        const purchase = {
            buyer,
            items:cart,
            total: getTotal(),  
            date: new Date()                   
        }
        const db = getFirestore()
        const orderCollection = collection (db, "orders")
        addDoc(orderCollection, purchase)
            .then(res => {
                setOrderId(res.id)
                clear()
                setBuyer({
                    name:"",
                    email:""
                })
            })
            .catch(error => console.log(error))
    }

    return(
        <div>
            CART
            <div className="cart-container">
                {cart.map((el)=>(
                    <div className="cart-card" key = {el.id}>
                        <p>Producto: {el.name}</p>
                        <p>Cantidad: {el.quantity}</p>
                        <img src={el.img} className="cart-image" alt={el.name} />
                        <button onClick={() => removeItem(el.id)} className="cart-button" >
                            Eliminar
                        </button>
                    </div>                    
                ))}
            </div>
            <Form
                handleChage= {handleChage}
                submit={submit}
                formData={buyer}
                error={error}
            />
            {
                orderId && <p className="orderC">Gracias por su compra {orderId}</p>
            }
        </div>
    )
}    

export default CartDetail
    