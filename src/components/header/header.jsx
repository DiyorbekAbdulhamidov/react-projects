import React from "react";
import "./header.scss";
import ava from "../../assets/imgs/ava.svg";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <input type="text" placeholder="Search..."/>
          <nav>
            <li><a href="">Analytics</a></li>
            <li><a href="">Earnings</a></li>
            <li><a href="">Ads Experiments</a></li>
          </nav>
          <img src={ava} alt="" />
        </header>
      </>
    );
  }
}