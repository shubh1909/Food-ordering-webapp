import React from "react";
import "./card.css";
import prod1 from "../../assets/sample.jpg";

function Card({name,price}) {
  return (
    <div className="card">
      <div className="image-section">
        <img src={prod1} alt="food image" />
      </div>
      <div className="content-section">
        <p className="title">{name}</p>
        <p className="price">&#x20B9; {price}/-</p>
        <button className="add-button">ADD</button>
      </div>
    </div>
  );
}
export default Card;
