import React from "react";
import styles from "../styles/recipelist.module.css";
import Navigation from "../components/Navigation";
import Recipe from "../components/Recipe";
import Category from "../components/CategoryMaterial";

const RecipeList = () => {
  const items = [
    "전체",
    "메인요리",
    "밑반찬",
    "면/만두",
    "국/찌개",
    "간식",
    "샐러드",
    "해장",
    "밥/죽/떡",
    "야식",
    "디저트",
  ];
  return (
    <div>
      <div id="wrapper">
        <div className={styles.up}>
          <div className={styles.category}>
            <Category items={items} />
          </div>
          <div className={styles.search}>
            <input
              className={styles.search_input}
              type="text"
              placeholder="재료 검색하기"
            ></input>
            <img
              className={styles.search_img}
              src="../images/search.png"
              alt="search"
            ></img>
          </div>
        </div>
        <div className={styles.recipe_box}>
          <Recipe />
         
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default RecipeList;

// function Category(props) {
//   const [selectedItem, setSelectedItem] = useState(0); // 첫 번째 버튼 기본 선택
//   const handleItemClick = index => {
//     setSelectedItem(index);
//   };
//   return (
//     <div className={styles.category_button_list}>
//       {props.items.map((item, index) => (
//         <div
//           key={index}
//           className={`${styles.category_button} ${
//             selectedItem === index ? styles.selected : ""
//           }`}
//           onClick={() => handleItemClick(index)}
//         >
//           {item}
//         </div>
//       ))}
//     </div>
//   );
// }