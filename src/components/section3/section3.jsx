import React from "react";
import "../section3/section3.scss";
import ovqat from "../../assets/imgs/ovqat.svg";
import ovqat1 from "../../assets/imgs/ovqat1.svg";
import ovqat2 from "../../assets/imgs/ovqat2.svg";
import ovqat3 from "../../assets/imgs/ovqat3.svg";
import ovqat4 from "../../assets/imgs/ovqat4.svg";
import ovqat5 from "../../assets/imgs/ovqat5.svg";
import ovqat6 from "../../assets/imgs/ovqat6.svg";
import ovqat7 from "../../assets/imgs/ovqat7.svg";
import knife from "../../assets/imgs/knife.svg";
import time from "../../assets/imgs/time.svg";
import yashilovqat from "../../assets/imgs/yashilovqat.svg"




export default class Section3 extends React.Component {
  render() {
    return (
      <>
        <section class="section-3">
          <div class="obsh">
            <div class="nomi">
              <h2>Simple and tasty recipes</h2>
              <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div class="gridd">
              <div><img src={ovqat} alt="" />
                <div class="yoz">
                  <p>Big and Juicy Wagyu Beef Cheeseburger</p>
                  <div class="qoshiq">
                    <div>
                      <img src={time} alt="" />
                      <p>30 Minutes</p>
                    </div>
                    <div>
                      <img src={knife} alt="" />
                      <p>Snack</p>
                    </div>
                  </div>
                </div>
              </div>
              <div><img src={ovqat1} alt="" />
                <div class="yoz">
                  <p>Fresh Lime Roasted Salmon with Ginger Sauce</p>
                  <div class="qoshiq">
                    <div>
                      <img src={time} alt="" />
                      <p>30 Minutes</p>
                    </div>
                    <div>
                      <img src={knife} alt="" />
                      <p>Snack</p>
                    </div>
                  </div>
                </div>
              </div>
              <div><img src={ovqat2} alt="" />
                <div class="yoz">
                  <p>Strawberry Oatmeal Pancake with Honey Syrup</p>
                  <div class="qoshiq">
                    <div>
                      <img src={time} alt="" />
                      <p>30 Minutes</p>
                    </div>
                    <div>
                      <img src={knife} alt="" />
                      <p>Snack</p>
                    </div>
                  </div>
                </div>
              </div>
              <div><img src={ovqat3} alt="" />
                <div class="yoz">
                  <p>Fresh and Healthy Mixed Mayonnaise Salad</p>
                  <div class="qoshiq">
                    <div>
                      <img src={time} alt="" />
                      <p>30 Minutes</p>
                    </div>
                    <div>
                      <img src={knife} alt="" />
                      <p>Snack</p>
                    </div>
                  </div>
                </div>
              </div>
              <div><img src={ovqat4} alt="" />
                <div class="yoz">
                  <p>Chicken Meatballs with Cream Cheese</p>
                  <div class="qoshiq">
                    <div>
                      <img src={time} alt="" />
                      <p>30 Minutes</p>
                    </div>
                    <div>
                      <img src={knife} alt="" />
                      <p>Snack</p>
                    </div>
                  </div>
                </div>
              </div>
              <div><img src={yashilovqat} alt="" />

              </div>
              <div><img src={ovqat5} alt="" />
                <div class="yoz">
                  <p>Fruity Pancake with Orange & Blueberry</p>
                  <div class="qoshiq">
                    <div>
                      <img src={time} alt="" />
                      <p>30 Minutes</p>
                    </div>
                    <div>
                      <img src={knife} alt="" />
                      <p>Snack</p>
                    </div>
                  </div>
                </div>
              </div>
              <div><img src={ovqat6} alt="" />
                <div class="yoz">
                  <p>The Best Easy One Pot Chicken and Rice</p>
                  <div class="qoshiq">
                    <div>
                      <img src={time} alt="" />
                      <p>30 Minutes</p>
                    </div>
                    <div>
                      <img src={knife} alt="" />
                      <p>Snack</p>
                    </div>
                  </div>
                </div>
              </div>
              <div><img src={ovqat7} alt="" />
                <div class="yoz">
                  <p>The Creamiest Creamy Chicken and Bacon Pasta</p>
                  <div class="qoshiq">
                    <div>
                      <img src={time} alt="" />
                      <p>30 Minutes</p>
                    </div>
                    <div>
                      <img src={knife} alt="" />
                      <p>Snack</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}