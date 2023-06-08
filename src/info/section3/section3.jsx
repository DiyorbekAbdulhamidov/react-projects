import React from "react";
import "./section3.scss";
import buisnes from "../../assets/imgs/buisnes.svg";


class Section3 extends React.Component {
  render() {
    return (
      <section>
        <div className="infos">
          <p>About Us</p>
          <span>The model offers a framework for discussing problems related <br /> to the user's experience, as well as possible ways and means of <br /> solving them. Application development begins at the top level  <br /> (strategy), where the future software product is described quite <br /> abstractly from the point of view of the expectations of both <br /> users and the customer.</span>
          <div className="nums">
            <div className="numInfo">
              <p>800</p>
              <span>Pupils</span>
            </div>
            <div className="numInfo">
              <p>18</p>
              <span>Teachers</span>
            </div>
            <div className="numInfo">
              <p>6</p>
              <span>Foreign languages</span>
            </div>
          </div>
        </div>
        <img  className="bus" src={buisnes} alt="" />
      </section>
    );
  }
}

export default Section3;