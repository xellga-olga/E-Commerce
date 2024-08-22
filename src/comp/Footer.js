import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h3>E-Commerce</h3>
            <img src="/images/logo.png" alt="Logo" />
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
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
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Phone: +38 (066) 830-88-25</p>
            <p>Email: ecommercesupport@gmail.com</p>
            <p>Address: 000 Street, City, Country</p>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 E-Commerce by Olya Pla. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
