import React from "react";
import "../card1/card1.scss";
import ptichka from "../../assets/imgs/ptichka.svg"

export default class Card1 extends React.Component {
  render() {
    return (
      <>
        <div className="card1">
          <p className="basic">Basic</p>
          <span className="dolr">$ <span className="son">19</span><span className="month">/month</span></span>
          <p className="pl">Good for small business launching <br /> their products less then once a year</p>
          <div className="ptichki">
            <p className="oq"><img src={ptichka} alt="" /> Unlimited Blocks</p>
            <p className="oq"><img src={ptichka} alt="" /> 5GB Clould Storages</p>
            <p className="kul"><img src={ptichka} alt="" /> Custom Domain Names</p>
            <p className="kul"><img src={ptichka} alt="" /> Unlimited Emails</p>
          </div>
          <button>Start Free Trial</button>
          <span className="fo">No credit card required</span>
        </div>
      </>
    )
  }
}