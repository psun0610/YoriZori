import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/refrigerator">
        <img src="/images/footer1.jpg" />
      </Link>
      <Link to="/recipelist">
        <img src="/images/footer2.jpg" />
      </Link>
      <Link to="/main">
        <img src="/images/footer3.jpg" />
      </Link>
      <Link to="/shoppingbasket">
        <img src="/images/footer4.jpg" />
      </Link>
      <Link to="/mypage">
        <img src="/images/footer5.jpg" />
      </Link>
    </footer>
  );
};

export default Footer;
