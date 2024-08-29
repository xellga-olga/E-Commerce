import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart = [], onAdd, onRemove, onDelete }) => {

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h3>#cart</h3>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Shopping Cart is Empty</h2>
          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          {cart.map((curElm) => (
            <div className="cart-container-box" key={curElm.id}>
              <div className="img-car-box">
                <img src={curElm.image} alt="product-image" />
              </div>
              <div className="detail-cart-box">
                <h4>{curElm.cat}</h4>
                <h3>{curElm.name}</h3>
                <p>Price: ${curElm.price}</p>
                <div className="cart-quantity">
                  <button onClick={() => onRemove(curElm)}>-</button>
                  <input type="number" value={curElm.qty} readOnly />
                  <button onClick={() => onAdd(curElm)}>+</button>
                </div>
                <p>Total: ${curElm.price * curElm.qty}</p>
                <button className="delete-button" onClick={() => onDelete(curElm)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
