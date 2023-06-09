import React from "react";
import "../header/header.scss";
import logo from "../../assets/imgs/logo.svg";
import facebook from "../../assets/imgs/facebook.svg";
import instagram from "../../assets/imgs/instagram.svg";
import twitter from "../../assets/imgs/twitter.svg";


export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <img src={logo} alt="" />
          <nav>
            <li><a href="">Home</a></li>
            <li><a href="">Recipes</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">About us</a></li>
          </nav>
          <div className="social">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </header>
      </>
    )
  }
}