import React from "react";

export default class P extends React.Component {
  render() {
    const { img, text } = this.props;

    return (
      <div className="panels">
        <img src={img} alt="" />
        <p>{text}</p>
      </div>
    );
  }
}