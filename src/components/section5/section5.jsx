import React from "react";
import "../section5/section5.scss";
import avatar from "../../assets/imgs/avatar.svg";
import more from "../../assets/imgs/more.svg";
import insta1 from "../../assets/imgs/insta1.svg";
import insta2 from "../../assets/imgs/insta2.svg";
import insta3 from "../../assets/imgs/insta3.svg";
import insta4 from "../../assets/imgs/insta4.svg";
import shape from "../../assets/imgs/shape.svg";
import comment from "../../assets/imgs/comment.svg";
import path from "../../assets/imgs/path.svg";
import save from "../../assets/imgs/save.svg";
import miniavatar from "../../assets/imgs/miniavatar.svg";


export default class Section5 extends React.Component {
  render() {
    return (
      <>
        <section className="section-5">
          <div className="col">
            <div className="texx">
              <h3>Check out @foodieland on Instagram</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore <br />
                magna aliqut enim ad minim
              </p>
            </div>
            <div className="flexboxx">
              <div>
                <div className="head">
                  <img src={avatar} alt="" />
                  <div className="olla">
                    <p>Foodieland.</p>
                    <span>Tokyo, Japan</span>
                  </div>
                  <div className="flf">
                    <img src={more} alt="" />
                  </div>
                </div>
                <div className="imgbox">
                  <img src={insta1} alt="" />
                </div>
                <div className="fotbox">
                  <div className="like">
                    <img src={shape} alt="" />
                    <img src={comment} alt="" />
                    <img src={path} alt="" />
                    <img className="save" src={save} alt="" />
                  </div>
                  <div className="liks">
                    <img src={miniavatar} alt="" />
                    <p>Liked by craig_love and 44,686 others</p>
                  </div>
                  <div className="last">
                    <p>
                      Foodieland. The vegetables dishes need to have certain
                      vitamin for those people
                    </p>
                    <span>September 19</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="head">
                  <img src={avatar} alt="" />
                  <div className="olla">
                    <p>Foodieland.</p>
                    <span>Tokyo, Japan</span>
                  </div>
                  <div className="flf">
                    <img src={more} alt="" />
                  </div>
                </div>
                <div className="imgbox">
                  <img src={insta2} alt="" />
                </div>
                <div className="fotbox">
                  <div className="like">
                    <img src={shape} alt="" />
                    <img src={comment} alt="" />
                    <img src={path} alt="" />
                    <img className="save" src={save} alt="" />
                  </div>
                  <div className="liks">
                    <img src={miniavatar} alt="" />
                    <p>Liked by craig_love and 44,686 others</p>
                  </div>
                  <div className="last">
                    <p>
                      Foodieland. The vegetables dishes need to have certain
                      vitamin for those people
                    </p>
                    <span>September 19</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="head">
                  <img src={avatar} alt="" />
                  <div className="olla">
                    <p>Foodieland.</p>
                    <span>Tokyo, Japan</span>
                  </div>
                  <div className="flf">
                    <img src={more} alt="" />
                  </div>
                </div>
                <div className="imgbox">
                  <img src={insta3} alt="" />
                </div>
                <div className="fotbox">
                  <div className="like">
                    <img src={shape} alt="" />
                    <img src={comment} alt="" />
                    <img src={path} alt="" />
                    <img className="save" src={save} alt="" />
                  </div>
                  <div className="liks">
                    <img src={miniavatar} alt="" />
                    <p>Liked by craig_love and 44,686 others</p>
                  </div>
                  <div className="last">
                    <p>
                      Foodieland. The vegetables dishes need to have certain
                      vitamin for those people
                    </p>
                    <span>September 19</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="head">
                  <img src={avatar} alt="" />
                  <div className="olla">
                    <p>Foodieland.</p>
                    <span>Tokyo, Japan</span>
                  </div>
                  <div className="flf">
                    <img src={more} alt="" />
                  </div>
                </div>
                <div className="imgbox">
                  <img src={insta4} alt="" />
                </div>
                <div className="fotbox">
                  <div className="like">
                    <img src={shape} alt="" />
                    <img src={comment} alt="" />
                    <img src={path} alt="" />
                    <img className="save" src={save} alt="" />
                  </div>
                  <div className="liks">
                    <img src={miniavatar} alt="" />
                    <p>Liked by craig_love and 44,686 others</p>
                  </div>
                  <div className="last">
                    <p>
                      Foodieland. The vegetables dishes need to have certain
                      vitamin for those people
                    </p>
                    <span>September 19</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="ohgi">
              <button>
                <p>Visit Our Instagram</p>
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}
