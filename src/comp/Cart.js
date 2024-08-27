import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = ({  cart = []  }) => {
  return (
    <>
      <div className="cart">
        <h3>#cart</h3>
        {cart.length === 0 && (
          <>
            <div className="empty-cart">
              <h2>Your Shopping Cart is Empty</h2>
              <Link to="/shop">
                <button>Shop Now</button>
              </Link>
            </div>
          </>
        )}
        <div className="cart-container"></div>
      </div>
    </>
  );
};

export default Cart;
