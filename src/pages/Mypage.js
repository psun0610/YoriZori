import React, { useEffect } from "react";
import styles from "../styles/Mypage.module.css";
import { useNavigate } from "react-router";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import AxiosAuth from "../components/AxiosAuth";

const Mypage = () => {
  // 로그인 유저 확인
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      AxiosAuth.post("/auth/validate", {
        token: localStorage.getItem("accessToken"),
      }).catch(error => {
        console.log(error);
        navigate("/home");
        return;
      });
    } else {
      navigate("/home");
      return;
    }
  }, []);

  return (
    <div>
      <Header name="마이페이지" />
      <div id="wrapper_contain_header" className={styles.wrapper}>
        <div className={styles.mypage_top}>
          <div className={styles.bookmark}>
            <p>레시피북마크</p>
            <img src="./images/bookmark.png" alt="bookmark"></img>
          </div>
          <div className={styles.hate}>
            <div className={styles.hate_top}>
              <span className={styles.hate_text}>나의 기피 음식</span>
              <button className={styles.hate_button}>
                <img
                  className={styles.hate_button_img}
                  src="/images/pencil.png"
                  alt="pencil"
                ></img>
              </button>
            </div>
            <span className={styles.hate_food}>기피하는 음식들</span>
          </div>
        </div>
        <ul className={styles.my_list}>
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
        </ul>
      </div>
      <Navigation />
    </div>
  );
};

export default Mypage;
