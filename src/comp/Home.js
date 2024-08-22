import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HomeProducts from "./HomeProducts";
import { GoEye, GoHeartFill } from "react-icons/go";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

const Home = () => {
  // Product Category
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);

  // Trending Products
  const [trendingProducts, setTrendingProducts] = useState(HomeProducts);

  // Filter of trending products
  const filtercate = (x) => {
    const filteredProduct = HomeProducts.filter((curElm) => curElm.type === x);
    setTrendingProducts(filteredProduct);
  };

  // All Trending Products
  const allTrendingProducts = () => {
    setTrendingProducts(HomeProducts);
  };

  // Product Type
  useEffect(() => {
    producCategory();
  }, []); // Run only once when the component mounts

  const producCategory = () => {
    // New Product
    const newCategory = HomeProducts.filter((x) => x.type === "new");
    setNewProduct(newCategory);

    // Featured Product
    const featuredCategory = HomeProducts.filter((x) => {
      return x.type === 'featured'
    })
    setFeaturedProduct(featuredCategory)

    // Top Product
    const topCategory = HomeProducts.filter((x) => {
      return x.type === 'top'
    })
    setTopProduct(topCategory)
  };

  return (
    <>
      <div className="home">
        <div className="top-banner">
          <div className="contact">
            <h3>silver aluminum</h3>
            <h2>APPLE MacBook Air</h2>
            <p>20% off at your first order</p>
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
                  {trendingProducts.map((curElm) => (
                    <div key={curElm.id} className="products-box">
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
                  ))}
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
                      <img alt="testimonial" src="images/testimonial.jpg" width={100} height={100} />
                    </div>
                    <div className="info-testimonial">
                      <h3>Sam Robot</h3>
                      <h4>web designer</h4>
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                      </p>
                    </div>
                  </div>
                </div>

                <div className="newsletter">
                  <div className="head-newsletter">
                    <h3>newsletter</h3>
                  </div>
                  <div className="form-newsletter">
                    <p>join our mailing list</p>
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
                <img alt="banner" src="/images/banner-1.jpg" width={250} height={500} />
              </div>
              <div className="banner-box">
                <img alt="banner" src="/images/banner-2.jpg" width={250} height={310} />
              </div>
            </div>
            <div className="banners-container-right-box">
              <div className="banners-container-left-box-top">
                <img alt="banner" src="/images/banner-3.jpg" width={600} height={300} />
                <img alt="banner" src="/images/banner-4.jpg" width={400} height={300} />
              </div>
              <div className="banners-container-left-box-bottom">
                <img alt="banner" src="/images/banner-5.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="product-type">
          <div className="type-container">
            <div className="type-box">
              <div className="type-header">
                <h2>New Product</h2>
              </div>

              {newProduct.map((curElm) => (
                <div key={curElm.id} className="type-product-box">
                  <div className="type-img-box">
                    <img alt="" src={curElm.image} width={100} height={100}/>
                  </div>
                  <div className="type-product-box-detail">
                    <h3>{curElm.name}</h3>
                    <p>${curElm.price}</p>
                    <div className="type-product-box-detail-icon">
                      <button><GoEye /></button>
                      <button><GoHeartFill /></button>
                      <button><GrCart /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="type-box">
              <div className="type-header">
                <h2>Featured Product</h2>
              </div>

              {featuredProduct.map((curElm) => (
                <div key={curElm.id} className="type-product-box">
                  <div className="type-img-box">
                    <img alt="" src={curElm.image} width={100} height={100} />
                  </div>
                  <div className="type-product-box-detail">
                    <h3>{curElm.name}</h3>
                    <p>${curElm.price}</p>
                    <div className="type-product-box-detail-icon">
                      <button><GoEye /></button>
                      <button><GoHeartFill /></button>
                      <button><GrCart /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="type-box">
              <div className="type-header">
                <h2>Top Product</h2>
              </div>

              {topProduct.map((curElm) => (
                <div key={curElm.id} className="type-product-box">
                  <div className="type-img-box">
                    <img alt="" src={curElm.image}  width={100} height={100} />
                  </div>
                  <div className="type-product-box-detail">
                    <h3>{curElm.name}</h3>
                    <p>${curElm.price}</p>
                    <div className="type-product-box-detail-icon">
                      <button><GoEye /></button>
                      <button><GoHeartFill /></button>
                      <button><GrCart /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
