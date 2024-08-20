import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HomeProducts from "./HomeProducts";
import { GoEye, GoHeartFill } from "react-icons/go";

const Home = () => {
  const [trendingProduct, setTrendingProducts] = useState(HomeProducts);

  const filtercate = (x) => {
    const filterProduct = HomeProducts.filter((curElm) => {
      return curElm.type === x;
    });
    setTrendingProducts(filterProduct);
  };
  return (
    <>
      <div className="home">
        <div className="top-banner">
          <div className="contact">
            <h3>silver aluminum</h3>
            <h2>APPLE MacBook Air</h2>
            <p>20% off at your first odder</p>
            <Link to="/shop" className="link">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="trending">
          <div className="container">
            <div className="left-box">
              <div className="header-left-box">
                <div className="heading-left-box">
                  <h2>trending product</h2>
                </div>

                <div className="cate">
                  <h3 onClick={() => filtercate("new")}>New</h3>
                  <h3 onClick={() => filtercate("featured")}>Featured</h3>
                  <h3 onClick={() => filtercate("top")}>top selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="products-container">
                  {trendingProduct.map((curElm) => {
                    return (
                      <>
                        <div className="products-box">
                          <div className="products-box-img">
                            <img src={curElm.image} alt="product" />
                            <div className="products-box-icon">
                              <div className="icon-box">
                                <GoEye />
                              </div>
                              <div className="icon-box">
                                <GoHeartFill />
                              </div>
                            </div>
                          </div>
                          <div className="products-box-info">
                            <h3>{curElm.name}</h3>
                            <p>${curElm.price}</p>
                            <button className="btn">Add To Cart</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="right-box"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
