import { useState } from "react";
import SearchWindow from "../SearchWindow";
import Category from "../../Category";
import IngredientList from "../IngredientList";
import * as S from "./style";
import { IngredientType } from "types/IngredientType";

interface SearchBoxProps {
  isOpen: boolean;
  placeholder: string;
  ITEMS: string[];
  userSelectList: IngredientType[];
  onItemSelect: (select: IngredientType) => void;
}

function SearchBox({
  ITEMS,
  isOpen,
  placeholder,
  onItemSelect,
  userSelectList,
}: SearchBoxProps) {
  const [searchText, setSearchText] = useState("");
  const [selectCategory, setSelectCategory] = useState(0);

  /**
   * 검색어 변경하는 함수
   * @param searchQuery 검색어
   */
  const handleSearch = (searchQuery: string) => {
    setSearchText(searchQuery);
  };

  /**
   * 카테고리 선택 클릭시 실행되는 함수
   * @param index 카테고리 배열의 인덱스
   */
  const handleSelectCategory = (index: number) => {
    setSelectCategory(index);
  };

  return (
    <S.Container>
      <SearchWindow placeholder={placeholder} onSearch={handleSearch} />
      <S.Category isOpen={isOpen}>
        <Category ITEMS={ITEMS} onClick={handleSelectCategory} />
        <IngredientList
          searchText={searchText}
          selectCategory={selectCategory}
          onItemSelect={onItemSelect}
          userSelectList={userSelectList} // 선택된 재료 상태 전달
        />
      </S.Category>
    </S.Container>
  );
}

export default SearchBox;
