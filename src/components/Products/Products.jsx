import React, { useEffect } from "react";
import {useState} from "react"
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

const Products = () => {
  const [products,setProducts]=useState([]);

  useEffect(() => {
    const fetchProducts = async ()=>{
      let r =  await fetch (`http://localhost:8080/products`);
      let d = await r.json();
      setProducts(d)
    };
    fetchProducts()
  },[])



  return(
   <div>
  Products:{" "}
  <div>
    {products.map((p)=>(
      <div key ={p.id}>
        <Link to ={`/products/${p.id}`}>{p.name}</Link>
      </div>

    ))}
    </div>
    <Outlet/>
  </div>
  
  )
};

export default Products;
