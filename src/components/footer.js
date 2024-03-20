import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/refrigerator">
        <img className="footer1" src="/images/footer1.jpg" />
      </Link>
      <Link to="/recipe">
        <img className="footer1" src="/images/footer2.jpg" />
      </Link>
      <Link to="/main">
        <img className="footer1" src="/images/footer3.jpg" />
      </Link>
      <Link to="/shoppingbasket">
        <img className="footer1" src="/images/footer4.jpg" />
      </Link>
      <Link to="/mypage">
        <img className="footer1" src="/images/footer5.jpg" />
      </Link>
    </footer>
  );
};

export default Footer;
