import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Dashboard from "./components/dashboard/dashboard";

export default class App extends React.Component {
  render() {
    return (
      <div className="bod">
        <Sidebar></Sidebar>
        <div className="col">
          <Header></Header>
          <Dashboard></Dashboard>
        </div>
      </div>
    );
  }
}