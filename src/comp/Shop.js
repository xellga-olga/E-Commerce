import React from "react";
import "./shop.css";
import { GoEye, GoHeartFill } from "react-icons/go";

const Shop = ({ shop, Filter, allCateFilter, addToCart }) => {
  return (
    <>
      <div className="shop">
        <h2># shop</h2>
        <p>Home . shop</p>
        <div className="shop-container">
          <div className="shop-container-left-box">
            <div className="shop-container-left-box-category">
              <div className="shop-container-left-box-category-header">
                <h2>all categories</h2>
              </div>

              <div className="shop-container-left-box-category-box">
                <ul>
                  <li onClick={() => allCateFilter()}># All</li>
                  <li onClick={() => Filter("Apple Watch Series 9")}>
                    # Apple Watch Series 9
                  </li>
                  <li onClick={() => Filter("Apple Watch Ultra 2")}>
                    # Apple Watch Ultra 2
                  </li>
                  <li onClick={() => Filter("Apple Watch SE")}>
                    # Apple Watch SE
                  </li>
                  <li onClick={() => Filter("Apple Watch Nike")}>
                    # Apple Watch Nike
                  </li>
                </ul>
              </div>
            </div>
            <div className="shop-banner">
              <div className="shop-banner-img">
                <img
                  alt="shop-banner"
                  src="images/shop-banner-left.jpg"
                  width={200}
                />
              </div>
            </div>
          </div>

          <div className="shop-container-right-box">
            {/* <div className="shop-container-right-box-banner">
              <div className="right-banner-img">
                <img
                  alt="banner"
                  src="images/shop-banner.jpg"
                  width={870}
                  height={250}
                />
              </div>
            </div> */}
            <div className="shop-product-box">
              <h2>Shop Product</h2>
              <div className="shop-product-box-container">
                {shop.map((curElm) => {
                  return (
                    <>
                      <div className="shop-box">
                        <div className="shop-box-img">
                          <img
                            src={curElm.image}
                            alt="product image"
                            height={170}
                            width={170}
                          />
                        </div>
                        <div className="shop-box-icon">
                          <div className="icon-box">
                            <GoHeartFill />
                          </div>
                          <div className="icon-box">
                            <GoEye />
                          </div>
                        </div>
                        <div className="shop-box-detail">
                          <h3>{curElm.name}</h3>
                          <p>${curElm.price}</p>
                          <button onClick={() => addToCart(curElm)}>Add To Cart</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
