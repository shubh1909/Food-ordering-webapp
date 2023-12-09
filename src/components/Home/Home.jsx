import React, { useEffect } from "react";
import "./home.css";
import { useState } from "react";
import Card from "../Card/Card";
import saladData from "../../info/data.js";
import mealData from "../../info/mealData.js";
import shakeData from "../../info/shakesData.js";
function Home() {
  const [activeTab, setActiveTab] = useState(1);
  const saladCardData = saladData;
  const mealCardData = mealData;
  const shakeCardData = shakeData;

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <>
      <div className="home">
        <div className="headline">
        <p>Choose the food 🥗</p>
        <p>that <b>fits</b> you the <b>best</b></p>
        </div>
        

        <div className="main-section">
          <p className="Order">Order</p>
          <div className="tab-header">
            <button
              onClick={() => handleTabClick(1)}
              className={activeTab === 1 ? "active" : ""}
            >
              Salads
            </button>
            <button
              onClick={() => handleTabClick(2)}
              className={activeTab === 2 ? "active" : ""}
            >
              Meals
            </button>
            <button
              onClick={() => handleTabClick(3)}
              className={activeTab === 3 ? "active" : ""}
            >
              Shakes
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 1 && <div className="wrapper">
                 {saladCardData.map(item=>{
                  return <Card name={item.name} price={item.price} />
                 })}
                </div>}
            {activeTab === 2 && <div className="wrapper">{mealCardData.map(item=>{
                  return <Card name={item.name} price={item.price} />
                 })}</div>}
            {activeTab === 3 && <div className="wrapper">{shakeCardData.map(item=>{
                  return <Card name={item.name} price={item.price} />
                 })}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
