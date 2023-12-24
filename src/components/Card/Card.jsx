import React from "react";
import "./card.css";
import prod1 from "../../assets/sample.jpg";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const navigate = useNavigate();
   
  return (
    <div
      className="card"
      
    >
      <div className="image-section">
        <img src={prod1} alt="food image" />
      </div>
      <div className="content-section">
        <p className="title">{data?.name}</p>
        <p className="price">&#x20B9; {data?.price}/-</p>
        <button className="add-button" onClick={() => {
        navigate("/detail",{state:{data:data}} );
      }}>ADD</button>
      </div>
    </div>
  );
}

export default Card;
