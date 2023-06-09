import React from "react";
import Header from "./components/header/header/header";
import Section1 from "./components/header/section1/section1";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Section1></Section1>
      </>
    );
  }
  
}