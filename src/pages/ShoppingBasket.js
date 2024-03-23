import React from "react";
import styles from "../styles/shoppingbasket.module.css";
import Navigation from "../components/Navigation";

const ShoppingBasket = () => {
  return (
    <div>
      <div id="wrapper">
        <header className={styles.basket_header}>ShoppingBasket</header>

        <div className={styles.shopping_basket_container}>
          <div className={styles.basket_info}>
            <span className={styles.ingredient_count}>담은 재료 개</span>
            <button className={styles.select_button}>선택하기</button>
          </div>

          <div className={styles.basket_items}>
            <div className={styles.basket_item}>
              <img
                src="https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg"
                className={styles.item_image}
              />
              <span className={styles.item_name}>Item 1</span>
              <div className={styles.item_button}>
                <button className={styles.item_cancel}>
                  <img className={styles.pin} src="/images/pin1.png" />
                </button>
                <button className={styles.item_cancel}>
                  <img className={styles.cancel} src="/images/cancel.png" />
                </button>
              </div>
            </div>
          </div>

          <button className={styles.add_button}>
            재료추가<img className={styles.add} src="/images/add.png"></img>
          </button>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default ShoppingBasket;
