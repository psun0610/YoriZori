import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "../styles/ShoppingBasket.module.css";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import AxiosAuth from "../components/AxiosAuth";
import { Link } from "react-router-dom";

const ShoppingBasket = () => {
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Authorization
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
    const fetchItems = async () => {
      try {
        const response = await AxiosAuth.get(`/users/cart`);
        //console.log(response);
        
        const uniqueItems = [];
        response.data.forEach(item => {
          if (!uniqueItems.some(uniqueItem => uniqueItem.ingredientId === item.ingredientId)) {
            uniqueItems.push(item);
          }
        });
  
        const sortedItems = uniqueItems.sort((a, b) => b.pinned - a.pinned);
        setItems(sortedItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
  
    fetchItems();
  }, [items]);

  const handleDeleteItem = async cartId => {
    try {
      await AxiosAuth.delete(`/users/cart/${cartId}`);
      setItems(prevItems => prevItems.filter(item => item.cartId !== cartId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleTogglePin = async cartId => {
    try {
      const updatedItems = items.map(item => {
        if (item.cartId === cartId) {
          return { ...item, pinned: !item.pinned };
        }
        return item;
      });
  
      setItems(updatedItems);
  
      const updatedItem = updatedItems.find(item => item.cartId === cartId);
      await AxiosAuth.put(`/users/cart`, updatedItem);
    } catch (error) {
      console.error("Error toggling pin:", error);
    }
  };

  return (
    <div>
      <Header name="장바구니" />
      <div id="wrapper_contain_header">
        <div className={styles.shopping_basket_container}>
          <div className={styles.basket_info}>
            <span className={styles.ingredient_count}>
              담은 재료 {items.length}개
            </span>
            {/* <button className={styles.select_button}>선택하기</button> */}
          </div>
          <div className={styles.shopping_list}>
            {items.map(item => (
              <div className={styles.basket_item} key={item.cartId}>
                <img
                  src={item.imageUrl}
                  className={styles.item_image}
                  alt="Item"
                />
                <span className={styles.item_name}>{item.name}</span>
                <div className={styles.item_button}>
                  <button
                    className={styles.pinbutton}
                    onClick={() => handleTogglePin(item.cartId)}
                  >
                    <img
                      className={styles.pin}
                      src={item.pinned ? "/images/pin2.png" : "images/pin1.png"}
                      alt={item.pinned ? "Pinned" : "Unpinned"}
                    />
                  </button>
                  <button
                    className={styles.item_cancel}
                    onClick={() => handleDeleteItem(item.cartId)}
                  >
                    <img
                      className={styles.cancel}
                      src="/images/cancel.png"
                      alt="Cancel"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Link to="/shoppingbasketadd">
          <button className={styles.add_button}>
            
            재료추가
            <img className={styles.add} src="/images/add.png" alt="Add" />
          </button>
          </Link>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default ShoppingBasket;
