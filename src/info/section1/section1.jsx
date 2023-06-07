import React from "react";
import girl from "../../assets/imgs/girl.svg";
import "./section1.scss";

class Section1 extends React.Component {
  render() {
    return (
      <section>
        <div className="info">
          <h1>Learn <br /> Any Foreign Language</h1>
          <span>With our teachers who write a program for <br />
            each student, you will be able to make your <br />
            first sketch after the first lesson.
          </span>
          <button>Get started</button>
        </div>
        <div className="img"><img src={girl} alt="" /></div>
      </section>
    );
  }
}

export default Section1;