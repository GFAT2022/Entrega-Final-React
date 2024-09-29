import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-UAujDmW-3B1cx3nE4ER9RZtbVSg0RGc",
  authDomain: "ecomerce-el-portal.firebaseapp.com",
  projectId: "ecomerce-el-portal",
  storageBucket: "ecomerce-el-portal.appspot.com",
  messagingSenderId: "1048981605036",
  appId: "1:1048981605036:web:93b215065b217b5429ad09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
