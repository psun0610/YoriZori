import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "../styles/ShoppingBasket.module.css";
import Navigation from "../components/Navigation";
import axios from "axios";

const ShoppingBasket = () => {
  // 로그인 한 사용자인지 확인
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token_nickname") === null) {
      navigate("/home");
    }
  }, []);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("/shoppingbasket.json");
        setItems(response.data);
      } catch (error) {
        console.error("Error Code:", error);
      }
    };

    fetchItems();
  }, []);

  const handleDeleteItem = itemId => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  //추후 axios 연동 후 delete 코드 구현 예정 밑은 임시 delete 코드

  // const handleDeleteItem = async itemId => {
  //   try {
  //     await axios.delete(`/shoppingbasket.json/${itemId}`);

  //     setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  //   } catch (error) {
  //     console.error("Error deleting item:", error);
  //   }
  // };

  const handleTogglePin = itemId => {
    const updatedItems = [...items];
    const index = updatedItems.findIndex(item => item.id === itemId);
    updatedItems[index].pinned = !updatedItems[index].pinned;
    if (updatedItems[index].pinned) {
      const pinnedItem = updatedItems.splice(index, 1);
      updatedItems.unshift(pinnedItem[0]);
    } else {
      const unpinnedItem = updatedItems.splice(index, 1);
      updatedItems.push(unpinnedItem[0]);
    }
    setItems(updatedItems);
  };

  return (
    <div>
      <div id="wrapper">
        <header className={styles.basket_header}>ShoppingBasket</header>

        <div className={styles.shopping_basket_container}>
          <div className={styles.basket_info}>
            <span className={styles.ingredient_count}>
              담은 재료 {items.length}개
            </span>
            <button className={styles.select_button}>선택하기</button>
          </div>
          <div className={styles.shopping_list}>
            {items.map(item => (
              <div className={styles.basket_item} key={item.id}>
                <img
                  src={item.imageUrl}
                  className={styles.item_image}
                  alt="Item"
                />
                <span className={styles.item_name}>{item.name}</span>
                <div className={styles.item_button}>
                  <button
                    className={styles.pinbutton}
                    onClick={() => handleTogglePin(item.id)}
                  >
                    <img
                      className={styles.pin}
                      src={item.pinned ? "/images/pin2.png" : "images/pin1.png"}
                    />
                  </button>

                  <button
                    className={styles.item_cancel}
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <img className={styles.cancel} src="/images/cancel.png" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className={styles.add_button}>
            재료추가
            <img className={styles.add} src="/images/add.png" alt="Add" />
          </button>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default ShoppingBasket;
