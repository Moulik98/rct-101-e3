import React, { useEffect,useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const [product,setProduct]=useState({});
  const {id} =useParams()

  
  
  // Note: this id should come from api
  // const product = { id: 1 };

  useEffect(() =>{
    if(id){
      fetch(`http://localhost:8080/products/${id}`)
        .then((r) => r.json())
        .then((d)=> setProduct(d))
    }
  },[id])
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};

export default Product;
