import React, { useState } from "react";
import "./shop.css";
import { GoEye, GoHeartFill } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";

const Shop = ({ shop, Filter, allCateFilter, addToCart }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState(null);

  const detailpage = (product) => {
    setDetail(product);
    setShowDetail(true);
  };

  const closedetail = () => {
    setShowDetail(false);
    setDetail(null);
  };

  return (
    <>
      {showDetail ? (
        <>
          <div className="product-detail">
            <button className="close-btn-detail" onClick={closedetail}>
              <TfiClose />
            </button>
            <div className="product-detail-container">
              <div className="image-box-detail">
                <img alt="product image" src={detail.image} />
              </div>
              <div className="product-detail-info">
                <h3>{detail.name}</h3>
                <p># {detail.cat}</p>
                <p>{detail.description}</p>
                <p>Price: ${detail.price}</p>
                <button onClick={() => addToCart(detail)}>Add To Cart</button>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="shop">
        <h2>#shop</h2>
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
            <div className="shop-product-box">
              <h2>Shop Product</h2>
              <div className="shop-product-box-container">
                {shop.map((curElm) => (
                  <div className="shop-box" key={curElm.id}>
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
                      <div
                        onClick={() => detailpage(curElm)}
                        className="icon-box"
                      >
                        <GoEye />
                      </div>
                    </div>
                    <div className="shop-box-detail">
                      <h3>{curElm.name}</h3>
                      <p>${curElm.price}</p>
                      <button onClick={() => addToCart(curElm)}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
