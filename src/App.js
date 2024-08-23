import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./comp/Nav";
import Rout from "./comp/Rout";
import Footer from "./comp/Footer";
import HomeProducts from "./comp/HomeProducts";

const App = () => {
  // SHOP PAGE PRODUCT
  const [shop, setShop] = useState(HomeProducts);
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout shop={shop}/>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
