import React from "react";
import logo from "../../assets/imgs/logo.svg";
import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} alt="" />
        <nav>
          <li><a href="">Home</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Contacts</a></li>
        </nav>
        <button>Let's Talk</button>
      </header>
    );
  }
}

export default Header;