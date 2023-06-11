import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Sidebar></Sidebar>
      </>
    );
  }
}