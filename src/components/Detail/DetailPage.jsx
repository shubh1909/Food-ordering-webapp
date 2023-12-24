import React from "react";
import prod1 from "../../assets/sample.jpg";
import "./detailPage.css";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
// use local dstorage for mapping data in cart


function DetailPage() {
  
  const state = useLocation();
  console.log(state.state.data);
  const item = state.state.data;
  const [quantity, setQuantity] = useState(1);
  const inc=()=>{
    setQuantity(quantity+1)
  }
  const dec=()=>{
    if (quantity<=0) {
      return 0;
    }else{
      setQuantity(quantity-1);
    }
  }
  const navigate= useNavigate();
  return (
    <>
      <div className="main-screen">
        <span className="return-arrow" onClick={
           ()=>{navigate("/")}
          }><FaChevronLeft/></span>
        <div className="item-image">
          <img src={prod1} alt="item" />
        </div>
        <div className="details">
          <div className="quantity">
            <span onClick={
              inc
            } >+</span>
            <span>{quantity}</span>
            <span onClick={
              dec
            }>-</span>
          </div>
          <div className="name">{item.name}</div>
          <div className="price">&#x20B9; {item.price}</div>
          <p className="desc">
            {item.description}
          </p>
          <div className="stats">
            <span className="stat">⭐ {item.rating}</span>
            <span className="stat">🔥 {item.calories} cal.</span>
            <span className="stat">⏰ {item.prepTime} mins</span>
          </div>
          <p className="sub-heading">Ingredients:</p>
          <div className="key-ingds">
            <span className="inds">🦐</span>
            <span className="inds">🍅</span>
            <span className="inds">🥒</span>
            <span className="inds">🍒</span>
          </div>
          <button onClick={
            ()=>{
                
              
            }
          } className="cta">Add To Cart</button>
        </div>
      </div>
    </>
  );
}
export default DetailPage;
