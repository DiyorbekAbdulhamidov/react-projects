import React from "react";
import Header from "./components/header/header";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
      </>
    );
  }
}