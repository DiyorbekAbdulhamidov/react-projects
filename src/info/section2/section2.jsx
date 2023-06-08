import React from "react";
import speaking from "../../assets/imgs/speaking.svg";
import writing from "../../assets/imgs/writing.svg";
import reading from "../../assets/imgs/reading.svg";
import listening from "../../assets/imgs/listening.svg";
import "./section2.scss";

class Section2 extends React.Component {
  render() {
    return (
      <section>
        <div className="left">
          <div className="speaking">
            <img src={speaking} alt="" />
            <p>Speaking</p>
            <span>
              Improve your English skills and confidence. <br />
              Live classes and interactive lessons online. <br />
              20%   extra free for a limited time only <br />
              <br />
              Learn English online and improve your  <br /> 
              skills through our high-quality courses <br />
              and resources – all designed for adult language learners. <br />
            </span>
            <button>Learn more</button>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <div className="writing">
              <img src={reading} alt="" />
              <p>Writing</p>
              <span>
                One of the most important and extensive  <br />
                areas of natural science, the science that  <br />
                studies substances, also their composition  <br />
              </span>
              <button>Learn more</button>
            </div>
            <div className="reading">
              <img src={reading} alt="" />
              <p>Reading</p>
              <span>
                perception and response actions of the user <br />
                resulting from the use and/or upcoming use <br />
                of the product, system or service <br />
              </span>
              <button>Learn more</button>
            </div>
          </div>
          <div className="listening">
            <div className="column">
              <p>Listening</p>
              <span>
                Here you can find activities to practise
                your listening skills. Listening will help you
                to improve your understanding 
              </span>
              <button>Learn more</button>
            </div>
            <img src={listening} alt="" />
          </div>
        </div>
      </section>
    );
  }
}

export default Section2;