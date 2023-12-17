import React from "react";
import './App.css';
import {
  Footer,
  Blog,
  Posibility,
  Features,
  WhatGpt,
  Header,
} from "./container";
import { Cta, Brand, Navbar } from "./components";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGpt />
      <Features />
      <Posibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
