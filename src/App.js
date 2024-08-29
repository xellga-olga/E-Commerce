import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./comp/Nav";
import Rout from "./comp/Rout";
import Footer from "./comp/Footer";
import HomeProducts from "./comp/HomeProducts";

const App = () => {
  const [shop, setShop] = useState(HomeProducts);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const searchProduct = () => {
    if (search.trim() === "") {
      alert("Please enter a search term!");
      setShop(HomeProducts);
      return;
    }

    const searchFilter = HomeProducts.filter((x) => {
      return x.cat.toLowerCase().includes(search.toLowerCase());
    });

    if (searchFilter.length === 0) {
      alert("No products found for your search query.");
    }

    setShop(searchFilter);
  };

  const Filter = (x) => {
    const catefilter = HomeProducts.filter((product) => {
      return product.cat === x;
    });
    setShop(catefilter);
  };

  const allCateFilter = () => {
    setShop(HomeProducts);
  };


  
  const addToCart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This product is alleardy added in cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Added to cart");
    }
  };

  const onAdd = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onDelete = (product) => {
    setCart(cart.filter((x) => x.id !== product.id));
  };

  return (
    <>
      <BrowserRouter>
        <Nav
          search={search}
          setSearch={setSearch}
          searchProduct={searchProduct}
        />
        <Rout
          shop={shop}
          Filter={Filter}
          allCateFilter={allCateFilter}
          addToCart={addToCart}
          cart={cart}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
