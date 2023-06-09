import React from "react";
import "../section2/section2.scss";
import breakfast from "../../assets/imgs/breakfast.svg";
import chocolate from "../../assets/imgs/chocolate.svg";
import meat from "../../assets/imgs/meat.svg";
import vegan from "../../assets/imgs/vegan.svg";
import desert from "../../assets/imgs/desert.svg";
import lunch from "../../assets/imgs/lunch.svg";


export default class Section2 extends React.Component {
  render() {
    return (
      <>
        <section className="section2">
          <div className="info">
            <h2>Categories</h2>
            <button>View All Categories</button>
          </div>
          <div className="products">
            <div className="breakfast">
              <img src={breakfast} alt="" />
              <p>Breakfast</p>
            </div>
            <div className="vegan">
              <img src={vegan} alt="" />
              <p>Vegan</p>
            </div>
            <div className="meat">
              <img src={meat} alt="" />
              <p>Meat</p>
            </div>
            <div className="dessert">
              <img src={desert} alt="" />
              <p>Dessert</p>
            </div>
            <div className="luch">
              <img src={lunch} alt="" />
              <p>Lunch</p>
            </div>
            <div className="chocolate">
              <img src={chocolate} alt="" />
              <p>Chocolate</p>
            </div>
          </div>
        </section>
      </>
    )
  }
}