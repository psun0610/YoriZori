import React, { useEffect, useState } from "react";
import styles from "../styles/Mypage.module.scss";
import { useNavigate } from "react-router";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import AxiosAuth from "../components/AxiosAuth";

const Mypage = () => {
  // 로그인 유저 확인
  const navigate = useNavigate();
  const [avoidIngredients, setAvoidIngredients] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      AxiosAuth.post("/auth/validate", {
        token: token,
      }).catch(error => {
        console.log(error);
        navigate("/home");
      });
    } else {
      navigate("/home");
    }

    AxiosAuth.get("/users/avoid-ingredients")
      .then(response => {
        setAvoidIngredients(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const nickname = localStorage.getItem("nickname");

  return (
    <div>
      <Header name="마이페이지" />
      <div id="wrapper_contain_header" className={styles.wrapper}>
        <div className={styles.user_info}>
          <div className={styles.top}>
            <div className={styles.top_left}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.625 5.74984C8.625 5.49567 8.72597 5.25192 8.90569 5.07219C9.08541 4.89247 9.32917 4.7915 9.58333 4.7915C9.8375 4.7915 10.0813 4.89247 10.261 5.07219C10.4407 5.25192 10.5417 5.49567 10.5417 5.74984V7.6665C10.5417 7.92067 10.4407 8.16443 10.261 8.34415C10.0813 8.52387 9.8375 8.62484 9.58333 8.62484C9.32917 8.62484 9.08541 8.52387 8.90569 8.34415C8.72597 8.16443 8.625 7.92067 8.625 7.6665V5.74984ZM9.58333 12.4582C9.32917 12.4582 9.08541 12.5591 8.90569 12.7389C8.72597 12.9186 8.625 13.1623 8.625 13.4165V15.3332C8.625 15.5873 8.72597 15.8311 8.90569 16.0108C9.08541 16.1905 9.32917 16.2915 9.58333 16.2915C9.8375 16.2915 10.0813 16.1905 10.261 16.0108C10.4407 15.8311 10.5417 15.5873 10.5417 15.3332V13.4165C10.5417 13.1623 10.4407 12.9186 10.261 12.7389C10.0813 12.5591 9.8375 12.4582 9.58333 12.4582Z"
                  fill="#B0B0B0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.79169 3.83325C4.79169 3.07075 5.09459 2.33949 5.63376 1.80032C6.17292 1.26115 6.90419 0.958252 7.66669 0.958252H15.3334C16.0959 0.958252 16.8271 1.26115 17.3663 1.80032C17.9055 2.33949 18.2084 3.07075 18.2084 3.83325V19.1666C18.2084 19.9291 17.9055 20.6604 17.3663 21.1995C16.8271 21.7387 16.0959 22.0416 15.3334 22.0416H7.66669C6.90419 22.0416 6.17292 21.7387 5.63376 21.1995C5.09459 20.6604 4.79169 19.9291 4.79169 19.1666V3.83325ZM7.66669 2.87492H15.3334C15.5875 2.87492 15.8313 2.97589 16.011 3.15561C16.1907 3.33533 16.2917 3.57909 16.2917 3.83325V9.58325H6.70835V3.83325C6.70835 3.57909 6.80932 3.33533 6.98904 3.15561C7.16877 2.97589 7.41252 2.87492 7.66669 2.87492ZM6.70835 11.4999H16.2917V19.1666C16.2917 19.4208 16.1907 19.6645 16.011 19.8442C15.8313 20.024 15.5875 20.1249 15.3334 20.1249H7.66669C7.41252 20.1249 7.16877 20.024 6.98904 19.8442C6.80932 19.6645 6.70835 19.4208 6.70835 19.1666V11.4999Z"
                  fill="#B0B0B0"
                />
              </svg>
              <h1>{nickname}</h1>
            </div>
            <div
              className={styles.top_right}
              onClick={() => {
                navigate("/recipebookmark");
              }}
            >
              <p>레시피 북마크</p>
              <img src="/images/bookmark.png" />
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.title}>
              <p>등록한 기피음식</p>
              <svg
                width="18"
                height="18"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_493_53)">
                  <path
                    d="M4.36929 5.11031C4.21287 5.26696 4.12501 5.47927 4.125 5.70064V6.87489H5.30658C5.52796 6.87489 5.74062 6.78689 5.89737 6.63014L9.38071 3.14498C9.45827 3.06743 9.5198 2.97536 9.56178 2.87403C9.60376 2.7727 9.62537 2.6641 9.62537 2.55442C9.62537 2.44473 9.60376 2.33613 9.56178 2.2348C9.5198 2.13347 9.45827 2.0414 9.38071 1.96385L9.0365 1.61964C8.95894 1.54201 8.86685 1.48042 8.76548 1.4384C8.6641 1.39638 8.55544 1.37476 8.44571 1.37476C8.33597 1.37476 8.22731 1.39638 8.12594 1.4384C8.02457 1.48042 7.93247 1.54201 7.85492 1.61964L4.36929 5.11031Z"
                    stroke="#6C6C6C"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.625 5.5C9.625 7.44471 9.625 8.41683 9.02092 9.02092C8.41683 9.625 7.44425 9.625 5.5 9.625C3.55529 9.625 2.58317 9.625 1.97908 9.02092C1.375 8.41683 1.375 7.44425 1.375 5.5C1.375 3.55529 1.375 2.58317 1.97908 1.97908C2.58317 1.375 3.55575 1.375 5.5 1.375"
                    stroke="#6C6C6C"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_493_53">
                    <rect width="11" height="11" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.bottom_list}>
              {avoidIngredients.map((ingredient, index) => (
                <p key={index}>{ingredient.name}</p>
              ))}
            </div>
          </div>
        </div>

        <ul className={styles.my_list}>
          <li>이용 약관 안내</li>
          <li
            onClick={() => {
              navigate("/memberedit");
            }}
          >
            회원정보수정
          </li>
          <li
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            로그아웃
          </li>
          <li>계정 탈퇴</li>
        </ul>
      </div>
      <Navigation />
    </div>
  );
};

export default Mypage;
