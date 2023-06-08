import React from "react";
import "./section4.scss";
import selfStudy from "../../assets/imgs/selfstudy.svg";
import liveOnline from "../../assets/imgs/liveonline.svg";
import personal from "../../assets/imgs/personal.svg";


class Section4 extends React.Component {
  render() {
    return (
      <section className="section4">
        <h3>Pricing</h3>
        <div className="flexBox">
          <div className="selfStudy">
            <img src={selfStudy} alt="" />
            <p>Self-study online course</p>
            <span>
              Start learning English online in live classes <br />
              with qualified EC teachers and students <br />
            </span>
            <button>
              <p> £5.99 <span className="per"> per month</span> </p>
            </button>
          </div>

          <div className="liveOnline">
            <img src={liveOnline} alt="" />
            <p>Live online classes</p>
            <span>
              Interactive group classes with expert <br />
              teachers. Free 7-day trial
            </span>
            <button>
              <p> £12.99 <span className="per"> per month</span> </p>
            </button>
          </div>

          <div className="personalT">
            <img src={personal} alt="" />
            <p>Personal Tuition</p>
            <span>
              Online one-to-one English tutoring – enjoy <br />
              our first session for only $1
            </span>
            <button>
              <p>  £20.99 <span className="per"> per month</span> </p>
            </button>
          </div>

        </div>
      </section>
    );
  }
}

export default Section4;