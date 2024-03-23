import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/LoginJoin.module.css";

function Button(props) {
  let buttonStyle = styles.button;
  if (props.color === "pink") {
    buttonStyle += ` ${styles.pink_back}`;
  } else if (props.color === "white") {
    buttonStyle += ` ${styles.white_back}`;
  }
  return (
    <div className={buttonStyle} style={{ width: props.width }}>
      {props.name}
    </div>
  );
}

Button.defaultProps = {
  color: "pink",
  width: "80%",
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Button;
