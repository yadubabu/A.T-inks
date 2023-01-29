import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Main from "./components/main/Main";
import "./app.scss";
import Info from "./components/Info";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feedback from "./components/Feedback";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import FandQ from "./components/FandQ";

const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <SideBar className="side" />
        <Main className="mainBody" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/feedback" exact component={Feedback} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/fandq" exact component={FandQ} />
        </Routes>
      </BrowserRouter>
      {/* 
      <BrowserRouter>
        {/*  *
        <Route path="/" exact component={Info} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/terms" exact component={Terms} />
      </BrowserRouter> */}
    </div>
  );
};

export default App;
