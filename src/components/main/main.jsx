import React from "react";
import "../main/main.scss";
import Card1 from "../card1/card1";

export default class Main extends React.Component {
  render() {
    return (
      <>
        <section>
          <div className="info">
            <span>It’s time to taste it</span>
            <h2>Ready to use our service? <br /> Choose a package.</h2>
          </div>
        </section>
      </>
    )
  }
}