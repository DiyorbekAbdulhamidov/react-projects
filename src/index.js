import React from "react";
import ReactDOM from "react-dom";
import Header from "./info/header/header";
import Section1 from "./info/section1/section1";
import Section2 from "./info/section2/section2";
import "./main.scss";

const root = document.getElementById("root");
ReactDOM.render(
  <>
    <Header />
    <Section1 />
    <Section2 />
  </>,
  root
);
