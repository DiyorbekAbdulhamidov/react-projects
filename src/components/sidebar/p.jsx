import React from "react";
import P from "./p";
import logo from "../../assets/imgs/logo.svg";
import dashboard from "../../assets/imgs/dashboard.svg";
import message from "../../assets/imgs/message.svg";
import reports from "../../assets/imgs/reports.svg";
import notification from "../../assets/imgs/notification.svg";
import invoices from "../../assets/imgs/invoices.svg";
import bookmarks from "../../assets/imgs/bookmarks.svg";
import conferences from "../../assets/imgs/confrences.svg";
import settings from "../../assets/imgs/settings.svg";
import about from "../../assets/imgs/about.svg";
import "./sidebar.scss";

export default class Sidebar extends React.Component {
  state = {
    elementsMenu: [
      { img: dashboard, text: "Dashboard" },
      { img: message, text: "Messages" },
      { img: reports, text: "Reports" },
      { img: notification, text: "Notifications" },
      { img: invoices, text: "Invoices " },
    ],
    elementsWork: [
      { img: bookmarks, text: "Bookmarks" },
      { img: conferences, text: "Conferences" },
    ],
    elementsOptions: [
      { img: settings, text: "Settings" },
      { img: about, text: "About" },
    ]
  };

  renderMenuElements() {
    const { elementsMenu } = this.state;
    return elementsMenu.map(({ img, text }, idx) => (
      <P key={idx} img={img} text={text} />
    ));
  }

  renderWorkElements() {
    const { elementsWork } = this.state;
    return elementsWork.map(({ img, text }, idx) => (
      <P key={idx} img={img} text={text} />
    ));
  }

  renderOptionElements() {
    const { elementsOptions } = this.state;
    return elementsOptions.map(({ img, text }, idx) => (
      <P key={idx} img={img} text={text} />
    ));
  }

  render() {
    return (
      <div className="sidebar">
        <img className="logo" src={logo} alt="" />
        <div className="main-menu">
          <span>Main Menu</span>
          {this.renderMenuElements()}
        </div>

        <div className="works">
          <span>Works</span>
          {this.renderWorkElements()}
        </div>

        <div className="options">
          <span>Options</span>
          {this.renderOptionElements()}
        </div>
      </div>
    );
  }
}