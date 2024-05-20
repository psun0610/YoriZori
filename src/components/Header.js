import React from "react";
import { useNavigate } from "react-router";

const Header = props => {
  const navigator = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        padding: "0 20px",
        boxShadow: "0 0 8px var(--grey40)",
        position: "sticky",
        top: "0",
        zIndex: "99",
        backgroundColor: "white",
      }}
    >
      <div
        onClick={() => {
          navigator(-1);
        }}
        style={{
          cursor: "pointer",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.375 5.25L8.625 12L15.375 18.75"
            stroke="#6C6C6C"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        style={{
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        {props.name}
      </div>
    </div>
  );
};

export default Header;
