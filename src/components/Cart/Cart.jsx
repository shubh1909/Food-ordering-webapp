import React from "react";
import "./cart.css";
import { reactLocalStorage } from "reactjs-localstorage";
function Cart({ setShowCart }) {
 
    return(  <>
        <div className="cart">
          <div className="cart-header">
            <div
              className="cart-close"
              onClick={() => {
                setShowCart(false);
              }}
            >
              X
            </div>
            <div className="cart-title">Cart</div>
          </div>
          <div className="cart-body">
            <div className="cart-item"></div>
          </div>
        </div>
      </>);

}
export default Cart;
