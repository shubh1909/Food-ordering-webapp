import React, { useState } from "react";
import "./header.css";
import { IoCartOutline } from "react-icons/io5";
import Cart from "../Cart/Cart";

function Header() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <div className="header">
        <div className="text">Welcome back User</div>
        <div
          onClick={() => {
            setShowCart(true);
            console.log(showCart);
          }}
        >
          <IoCartOutline className="cart-logo" />
        </div>
      </div>
      <div className="cart-area">
      {showCart && <Cart setShowCart={setShowCart}/>} 
      </div>
        
      
    </>
  );
}


export default Header;
