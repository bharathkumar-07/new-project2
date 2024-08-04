import React , {Children, createContext, useState} from "react";
import Menu from  "../Navbar/Menu"

export const CategoryContext = createContext(null);

const getDefaultCart =()=>{
    let cart= {};
    for (let i= 1 ; i < Menu.length + 1; i++){
        cart[i]=0;
    }
    return cart;
};

export const CategoryContextProvider = (props) =>{
    const [cartItems,setCartItems]= useState(getDefaultCart());

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    };

    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }; 

    const contextValue = {cartItems,addToCart,removeFromCart}  

    return(
    <CategoryContextProvider
        value = {contextValue}
        >{props.Children}
        </CategoryContextProvider>
    );
    } ;
    