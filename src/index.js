import React from "react";
import ReactDOM from "react-dom";
import Header from "./info/header/header";
import Section1 from "./info/section1/section1";
import Section2 from "./info/section2/section2";
import Section3 from "./info/section3/section3";
import Section4 from "./info/section4/section4";
import Section5 from "./info/section5/section5";
import Footer from "./info/footer/footer";
import "./main.scss";

const root = document.getElementById("root");
ReactDOM.render(
  <>
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Footer />
  </>,
  root
);
