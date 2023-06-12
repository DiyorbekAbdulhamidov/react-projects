import React from "react";
import visitor from "../../assets/imgs/visitor.svg";
import page from "../../assets/imgs/page.svg";
import bounce from "../../assets/imgs/bounce.svg";
import swap from "../../assets/imgs/swap.svg";
import tolqin from "../../assets/imgs/tolqin.svg"
import users from "../../assets/imgs/users.svg";
import online from "../../assets/imgs/online.svg";
import Box from "./boxes";
import "./dashboard.scss";


export default class Dashboard extends React.Component {
  state = {
    elementsBox: [
      { text: "Visitors", icon: visitor, price: "92,680", foiz: "+3,840 (26,80%)", strelki: swap },
      { text: "Page views", icon: page, price: "580.5K", foiz: "+210K (16,20%)", strelki: swap },
      { text: "Bounce rates", icon: bounce, price: "15.43%", foiz: "-0.74 (0.74%)", strelki: swap },
    ],
    usersBox: [
      { text: "New users", icon: users, price: "17,805", foiz: "+1,500 (4,17%)" },
      { text: "Online users", icon: online, price: "1,846", foiz: "+530 (8,38%)" },
    ],

  };

  render() {
    const { elementsBox, usersBox } = this.state;
    return (
      <>
        <div className="dashboard">

          <h1>Dashboard</h1>
          <div className="between">
            <div className="column">
              <span>Today vs 7 days ago</span>
              <p>Site performance</p>
            </div>
            <p>June 03, 22 to July 02, 22</p>
          </div>

          <div className="flexBox">
            {elementsBox.map((box, idx) => (
              <Box
                key={idx}
                text={box.text}
                icon={box.icon}
                price={box.price}
                foiz={box.foiz}
                strelki={box.strelki}
              />
            ))}
          </div>

          <div className="users">
            <div className="statistic">
              <p>Users statistics</p>
              <span>Today’s statistics</span>
            </div>
            <span>June 03, 22 to July 02, 22</span>
          </div>

          <div className="flexBox">
            <div className="tolqin">
              <span>Unique visitors</span>
              <img src={tolqin} alt="" />
            </div>
            {usersBox.map((box, idx) => (
              <Box
                key={idx}
                text={box.text}
                icon={box.icon}
                price={box.price}
                foiz={box.foiz}
                strelki={box.strelki}
              />
            ))}
          </div>

          <div className="sites">
            <p>Top referring sites</p>
            <span>Outbond links that come to your site</span>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Site title</th>
              <th>Link</th>
              <th>Total clicks</th>
              <th>Total Referrer type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Stack Overflow</td>
              <td><a href="">https://stackoverflow.com/question/..</a></td>
              <td>@120</td>
              <td>@nofollow, noopener</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Youtube</td>
              <td><a href="">https://www.youtube.com/?v=7wB1j..</a></td>
              <td>@14,522</td>
              <td>nofollow</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Github</td>
              <td><a href="">https://github.com/andrew/tabler-x..</a></td>
              <td>36</td>
              <td>nofollow</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Gosh William</td>
              <td><a href="">https://gwilliam.co/blog/capture-fro..</a></td>
              <td>580</td>
              <td>ugc</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Stack Overflow</td>
              <td><a href="">https://stackoverflow.com/question/..</a></td>
              <td>112</td>
              <td>nofollow, noopener</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Stack Overflow</td>
              <td><a href="">https://stackoverflow.com/question/..</a></td>
              <td>4</td>
              <td>nofollow, noopener</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Stack Overflow</td>
              <td><a href="">https://stackoverflow.com/question/..</a></td>
              <td>51</td>
              <td>nofollow, noopener</td>
            </tr>
            <tr>
              <th>8</th>
              <td>Stack Overflow</td>
              <td><a href="">https://stackoverflow.com/question/..</a></td>
              <td>112</td>
              <td>nofollow, noopener</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}