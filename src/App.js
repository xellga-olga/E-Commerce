import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./comp/Nav";
import Rout from "./comp/Rout";
import Footer from "./comp/Footer";
import HomeProducts from "./comp/HomeProducts";

const App = () => {
  // SHOP PAGE PRODUCT
  const [shop, setShop] = useState(HomeProducts);
  // SHOP CATEGORY FILTER
  const Filter = (x) => {
    const catefilter = HomeProducts.filter((product) => {
      return product.cat === x;
    });
    setShop(catefilter);
  };

  const allCateFilter = () => {
    setShop(HomeProducts);
  };

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout shop={shop} Filter={Filter} allCateFilter={allCateFilter} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
