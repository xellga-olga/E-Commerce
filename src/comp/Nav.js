import React from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import "./nav.css";
import { AiOutlineLogin } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { BiLogOutCircle } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Nav = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="header">
        <div className="top-header">
          <div className="icon">
            <FaShoppingBag />
          </div>
          <div className="info">
            <p>Free Shipping When Shopping upto $1000</p>
          </div>
        </div>
        <div className="mid-header">
          <div className="logo">
            <img src="images/logo.png" width={100} height={60} alt="logo" />
          </div>
          <div className="search-box">
            <input type="text" placeholder="search" />
            <button>
              <FaSearch />
            </button>
          </div>
          {isAuthenticated ? (
            // If user is LOGIN then Logout btn will shown and also user profile
            <div className="user">
              <div className="icon">
                <BiLogOutCircle />
              </div>
              <div className="btn">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // If user ISN'T LOGIN  then login btn will shown
            <div className="user">
              <div className="icon">
                <AiOutlineLogin />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>;
              </div>
            </div>
          )}
        </div>
        <div className="last-header">
          <div className="user-profile">
            {
              // User Profile Will Shown Here
              isAuthenticated ? (
                <>
                  <div className="icon">
                    <CiUser />
                  </div>
                  <div className="info">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="icon">
                    <CiUser />
                  </div>
                  <div className="info">
                    <p>Please Login</p>
                  </div>
                </>
              )
            }
          </div>
          <div className="nav">
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="link" to="/collection">
                  Collection
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="offer">
            <p>flat 10% over all Iphone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
