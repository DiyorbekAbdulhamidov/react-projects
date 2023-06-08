import React from "react";
import "./section5.scss";
import boy from "../../assets/imgs/boy.svg";


class Section5 extends React.Component {
  render() {
    return (
      <section className="section5">
        <img src={boy} alt="" />
        <div className="sub">
          <h4>Contact Us</h4>
          <span>Discover your current English level by taking our free online English test.Sign <br /> up to our newsletter for learning tips and free resources</span>
          <input type="text" placeholder="Enter Your E-mail"/> <button>Subscribe</button>
        </div>
      </section>
    );
  }
}

export default Section5;