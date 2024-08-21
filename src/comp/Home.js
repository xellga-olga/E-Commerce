import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HomeProducts from "./HomeProducts";
import { GoEye, GoHeartFill } from "react-icons/go";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Home = () => {
  const [trendingProduct, setTrendingProducts] = useState(HomeProducts);

  const filtercate = (x) => {
    const filterProduct = HomeProducts.filter((curElm) => {
      return curElm.type === x;
    });
    setTrendingProducts(filterProduct);
  };

  const allTrendingProducts = () => {
   setTrendingProducts(HomeProducts)
  }

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
                  <h2 onClick={() => allTrendingProducts()}>trending products</h2>
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
                <button className="btn-products-box">Show More</button>
              </div>
            </div>

            <div className="right-box">
               <div className="right-box-container">
                  <div className="testimonial">
                     <div className="head">
                        <h3>our testimonial</h3>
                     </div>
                     <div className="detail">
                        <div className="detail-img-box">
                           <img alt="testimonial" src="images/testimonial.jpg" width={100}  height={100}/>
                        </div>
                        <div className="info-testimonial">
                           <h3>Sam Robot</h3>
                           <h4>web designer</h4>
                           <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </p>
                        </div>
                     </div>
                  </div>

                  <div className="newsletter">
                    <div className="head-newsletter">
                      <h3>newsletter</h3>
                    </div>
                    <div className="form-newsletter">
                      <p>join our malling list</p>
                      <input type="email" placeholder="E-mail" autoComplete="off"></input>
                      <button>subscribe</button>
                      <div className="icon-box-form-newsletter">
                        <div className="icon-form-newsletter">
                        <FaFacebook />
                        </div>
                        <div className="icon-form-newsletter">
                        <FaInstagram />
                        </div>
                        <div className="icon-form-newsletter">
                        <FaTwitter />
                        </div>
                        <div className="icon-form-newsletter">
                        <FaYoutube />
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="banners">
          <div className="banners-container">
            <div className="banners-container-left-box">
              <div className="banner-box">
                <img alt="banner" src="/images/banner-1.jpg" width={250} height={500}/>
              </div>
              <div className="banner-box">
              <img alt="banner" src="/images/banner-2.jpg"  width={250} height={500}/>
              </div>
            </div>
            <div className="banners-container-right-box">
              <div className="banners-container-left-box-top">
                <img alt="banner" src="/images/banner-3.jpg" width={600} height={300}/>
                <img alt="banner" src="/images/banner-4.jpg" width={400} height={300}/>
              </div>
              <div className="banners-container-left-box-bottom">
                <img alt="banner" src="/images/banner-5.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="product-type"></div>
      </div>
    </>
  );
};

export default Home;
