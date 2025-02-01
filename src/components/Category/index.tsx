import { useState } from "react";
import * as S from "./style";

// 재료, 레시피 검색에 사용되는 검색 컴포넌트
// props로 items 배열이 들어와야함
interface CategoryProps {
  ITEMS: string[];
  onClick: (index: number) => void;
}

function Category({ ITEMS, onClick }: CategoryProps) {
  const [selectedItem, setSelectedItem] = useState(0);

  /**
   * 카테고리 클릭시 클릭한 카테고리로 변경되는 함수
   * @param index 카테고리의 인덱스
   */
  const handleItemClick = (index: number) => {
    setSelectedItem(index);
    onClick(index);
  };

  return (
    <S.CategoryNav aria-label="재료 카테고리 네비게이션">
      {ITEMS.map((item, index) => (
        <S.Button
          key={index}
          isSelect={selectedItem === index}
          onClick={() => handleItemClick(index)}
        >
          {item}
        </S.Button>
      ))}
    </S.CategoryNav>
  );
}

export default Category;
