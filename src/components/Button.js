import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/home.module.css";

function Button({ color, name }) {
  if (color == "pink") {
    return <div className={`${styles.button} ${styles.pink_back}`}>{name}</div>;
  } else if (color == "white") {
    return (
      <div className={`${styles.button} ${styles.white_back}`}>{name}</div>
    );
  }
}

Button.defaultProps = {
  color: "pink",
};
// Button 컴포넌트에 대한 PropTypes 정의
Button.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Button;
