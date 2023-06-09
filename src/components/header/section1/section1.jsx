import React from "react";
import "../section1/section1.scss";
import like from "../../../assets/imgs/like.svg";
import recipes from "../../../assets/imgs/recipes.svg";
import knife from "../../../assets/imgs/knife.svg";
import time from "../../../assets/imgs/time.svg";
import brat from "../../../assets/imgs/brat.svg";
import play from "../../../assets/imgs/play.svg";

export default class Section1 extends React.Component {
  render() {
    return (
      <>
        <section className="section1">
          <div className="left">
            <div className="recipes">
              <img src={recipes} alt="" />
              <p>Hot Recipes</p>
            </div>
            <h1>Spicy delicious <br /> chicken wings</h1>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div className="btns">
              <button><img src={time}alt="" /> 30 Minutes</button>
              <button><img src={knife} alt="" /> Chicken</button>
            </div>
            <div className="last">
              <div className="john">
                <img src={brat} alt="" />
                <div className="name">
                  <p>John Smith</p>
                  <span>15 March 2022</span>
                </div>
              </div>
              <button className="play">View Recipes <img src={play} alt="" /></button>
            </div>
          </div>

          <div className="right"><img className="like" src={like} alt="" /></div>
        </section>
      </>
    )
  }
}