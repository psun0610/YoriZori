import Ingredient from "components/Ingredient";
import * as S from "./NearExpList.style";

interface NearExpListProps {
  id: number;
  expDate: string;
  putDate: string;
  storagePlace: string;
  ingredientId: number;
  imageUrl: string;
  categoryId: number;
  categoryName: string;
  name: string;
  dday: number;
}
/** 소비기한 임박 재료 리스트 */
const NearExpList = ({ nearExpList }: { nearExpList: NearExpListProps[] }) => {
  return (
    <>
      {nearExpList.length > 0 && (
        <S.CloseExpContainer>
          <h1>
            <span>소비기한이 임박한 재료</span>가 있어요!
          </h1>
          <S.IngredientContainer>
            {nearExpList.map((ingredient, index) => (
              <div key={index}>
                <Ingredient
                  name={ingredient.name}
                  dday={ingredient.dday}
                  src={ingredient.imageUrl}
                />
              </div>
            ))}
          </S.IngredientContainer>
        </S.CloseExpContainer>
      )}
    </>
  );
};

export default NearExpList;
