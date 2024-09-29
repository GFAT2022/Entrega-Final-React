
import React, { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import CartContext from "../../context/CartContext/CartContext";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    console.log(categoryId)
    const { category } = useContext(CartContext);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");
        getDocs(itemCollection)
            .then((snapshot) => {
                const allProducts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProducts(allProducts);
            });
    }, []);

  
    const filteredProducts = category ? products.filter(product => product.category === category) : products;

    return (
        <div className="container">
            <ItemList items={filteredProducts} />
        </div>
    );
};

export default ItemListContainer;