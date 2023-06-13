import React from "react";

export default class Box extends React.Component {
  render() {
    const { text, icon, price, foiz, strelki } = this.props;

    return (
      <div className="boxx">
        <div className="head">
          <span>{text}</span>
          <img src={icon} alt="" />
        </div>
        <p>{price}</p>
        <div className="btw">
          <span>{foiz}</span>
          <img src={strelki} alt="" />
        </div>
      </div>
    );
  }
}