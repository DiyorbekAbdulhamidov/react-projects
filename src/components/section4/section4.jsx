import React from "react";
import "../section4/section4.scss";
import oshpaz from "../../assets/imgs/oshpaz.svg";

export default class Section4 extends React.Component {
  render() {
    return (
      <>
        <section class="section-4">
          <div class="asosiy">
            <div class="texti">
              <h2>Everyone can be a<br/>
                chef in their own kitchen</h2>
              <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim<br/> ad minim </p>
              <button>Learn More</button>
            </div>
            <div><img src={oshpaz} alt=""/></div>
          </div>
        </section>
      </>
    )
  }
}