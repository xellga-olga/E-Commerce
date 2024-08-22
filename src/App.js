import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./comp/Nav";
import Rout from "./comp/Rout";
import Footer from "./comp/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
