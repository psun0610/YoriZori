// LoginSignupInput.js
import React from "react";
import styles from "../styles/home.module.css";
import PropTypes from "prop-types";

function LoginSignupInput(props) {
  return (
    <div className={styles.input_container}>
      <input className={styles.input} onChange={props.onChange}></input>
      <p className={styles.input_ph + (props.value ? ` ${styles.active}` : "")}>
        {props.name}
      </p>
    </div>
  );
}

LoginSignupInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginSignupInput;
