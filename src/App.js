import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./comp/Nav";
import Rout from "./comp/Rout";
import Footer from "./comp/Footer";
import HomeProducts from "./comp/HomeProducts";

const App = () => {
  const [shop, setShop] = useState(HomeProducts);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([])

  const searchProduct = () => {
    if (search.trim() === '') {
      alert('Please enter a search term!');
      setShop(HomeProducts);  
      return;
    }

    const searchFilter = HomeProducts.filter((x) => {
      return x.cat.toLowerCase().includes(search.toLowerCase());
    });

    if (searchFilter.length === 0) {
      alert('No products found for your search query.');
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
      return x.id === product.id
    })
    if(exist) {
      alert('This product is alleardy added in cart')
    } else{
      setCart([...cart, {...product, qty: 1}])
      alert('Added to cart')
    }
  }
  console.log(cart)



  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchProduct={searchProduct} />
        <Rout shop={shop} Filter={Filter} allCateFilter={allCateFilter} addToCart={addToCart}/>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;