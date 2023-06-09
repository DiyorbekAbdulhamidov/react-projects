import React from "react";
import "../card1/card1.scss";
import {Ptichka} from "./assets/imgs"
export default class Card1 extends React.Component {
  render() {
    return (
      <>
        <div className="Card1">
          <p>Basic</p>
          <span>$ 19 month</span>
          <p>Good for small business launching <br /> their products less then once a year</p>
          <p><img src={} alt="" /></p>
        </div>
      </>
    )

  }
}