import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Contact from "./Contact";

const Rout = ({
  shop,
  Filter,
  allCateFilter,
  addToCart,
  cart,
  onAdd,
  onRemove,
  onDelete,
}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              shop={shop}
              Filter={Filter}
              allCateFilter={allCateFilter}
              addToCart={addToCart}
              cart={cart}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Rout;
