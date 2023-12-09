import React from "react";
import "./header.css";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <>
      <div className="header">
        <div>Welcome back User </div>
        <div><AiOutlineMenu/></div>
      </div>
    </>
  );
}

export default Header;
