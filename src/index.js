import React from "react";
import ReactDOM from "react-dom";
import Header from "./info/header/header";
import Section1 from "./info/section1/section1";
import "./main.scss";

const root = document.getElementById("root");
ReactDOM.render(
  <>
    <Header />
    <Section1 />
  </>,
  root
);
