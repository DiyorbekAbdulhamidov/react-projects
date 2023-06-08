import React from "react";
import "./footer.scss";
import logo from "../../assets/imgs/logo.svg";


class Footer extends React.Component {
  render() {
    return (
      <footer>
        <img src={logo} alt="" />
        <span>Terms and Conditions • Privacy Policy • Cookie Policy</span>
      </footer>
    );
  }
}

export default Footer;