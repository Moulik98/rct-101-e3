import React, { createContext, useContext } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const{isAuthorized}=useContext(AuthContext)
  const [count,setCount]=useState(0);

  const addToCart=() =>{
    setCount(count+1);
  }

  const buy =()=>{
    if(isAuthorized){
      console.log("can buy")
    } else{
      console.log("Cannot buy without login")
    }
  }
  return( <CartContext.Provider value={{addToCart,buy,count}}>{children}</CartContext.Provider>
)};
