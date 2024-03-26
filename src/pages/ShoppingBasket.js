import React, { useState } from "react";
import styles from "../styles/shoppingbasket.module.css"; 
import Navigation from "../components/Navigation";

const ShoppingBasket = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "예쁜 달걀",
      imageUrl: "https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg",
      pinned: false,
    },
    {
      id: 2,
      name: "못생긴 달걀",
      imageUrl: "https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg",
      pinned: false,
    },
    {
      id: 3,
      name: "그냥 달걀",
      imageUrl: "https://image.zdnet.co.kr/2019/01/15/sini_1zwN8DfI5uThk94.jpg",
      pinned: false,
    },
  ]);

  const handleDeleteItem = itemId => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

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
                    <img className={styles.pin} src={item.pinned ? "/images/pin2.png":"images/pin1.png"} />
                  </button>

                  <button
                    className={styles.item_cancel}
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <img className={styles.cancel} src="/images/cancel.png"/>
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
      <Navigation/>
    </div>
  );
};

export default ShoppingBasket;
