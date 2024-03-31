import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Registration = () => {
  // 로그인 한 사용자인지 확인
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token_nickname") === null) {
      navigate("/home");
    }
  }, []);
  return <div>Registration</div>;
};

export default Registration;
