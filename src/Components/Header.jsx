import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import myImage from "../Pages/img/logo/Orange\ and\ Yellow\ Kitchen\ Food\ Logo\ \(1\).png";


const Header = () => {
  return (
    <div className="header">
      <header>
       
          <div className="logo">
            <img className="imgg" src={myImage} alt="myImage" />
            <h1>FOOD PARK</h1>
          </div>
        


        <div className="b1">
          <button className="button1">
            <Link className="link" to="/">Home</Link></button>
          <button className="button2"> <Link
            className="link" to="/favorites">Fav</Link></button>
        </div>
      </header>
    </div>
  );
};

export default Header;
