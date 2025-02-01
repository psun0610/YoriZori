import { useNavigate } from "react-router-dom";
import * as S from "./EditDeleteButton.style";
import { IngredientDetailType } from "../IngredientDetailType";
import { forwardRef } from "react";

interface EditDelteButtonProps {
  selectedIngredient: IngredientDetailType;
  handleDelete: (ingredient: IngredientDetailType) => void;
}

const EditDelteButton = forwardRef<HTMLDivElement, EditDelteButtonProps>(
  ({ selectedIngredient, handleDelete }, ref) => {
    const navigate = useNavigate();

    return (
      <S.Container ref={ref}>
        <S.Ingredient>
          <S.IngredientImgBox>
            <img src={selectedIngredient.imageUrl} />
          </S.IngredientImgBox>
          <p>{selectedIngredient.name}</p>
        </S.Ingredient>

        <S.OptionsBox>
          {selectedIngredient.storagePlace === "FROZEN" && (
            <p>냉동되어 있어요</p>
          )}
          {selectedIngredient.storagePlace !== "FROZEN" && (
            <>
              {selectedIngredient.dday < 0 && (
                <p>{selectedIngredient.name}의 소비기한이 지났어요😭</p>
              )}
              {selectedIngredient.dday === 0 && (
                <p>
                  {selectedIngredient.name}의 소비기한이 <span>오늘</span>
                  까지에요
                </p>
              )}
              {selectedIngredient.dday > 0 && (
                <p>
                  {selectedIngredient.name}의 소비기한이{" "}
                  <span>{selectedIngredient.dday}일</span> 남았어요!
                </p>
              )}
            </>
          )}

          <S.OptionsBox>
            <button
              onClick={() => {
                navigate("/refrigerator_add", {
                  state: {
                    isEditMode: true,
                    selectedIngredient: selectedIngredient,
                  },
                });
              }}
              style={{ cursor: "pointer" }}
            >
              재료 수정
              <EditSvg />
            </button>

            <button
              onClick={() => handleDelete(selectedIngredient)}
              style={{ cursor: "pointer" }}
            >
              재료 삭제
              <DeleteSvg />
            </button>
          </S.OptionsBox>
        </S.OptionsBox>
      </S.Container>
    );
  },
);

const EditSvg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
        stroke="#EF64B8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
        stroke="#EF64B8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DeleteSvg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_467_24)">
        <path
          d="M14.28 2C14.6998 2.00011 15.1088 2.13229 15.4493 2.37781C15.7898 2.62333 16.0444 2.96975 16.177 3.368L16.72 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7L19.997 7.071L19.13 19.214C19.0759 19.9706 18.7372 20.6786 18.182 21.1956C17.6269 21.7125 16.8965 21.9999 16.138 22H7.862C7.10346 21.9999 6.37311 21.7125 5.81797 21.1956C5.26283 20.6786 4.92411 19.9706 4.87 19.214L4.003 7.07C4.00119 7.04671 4.00019 7.02336 4 7C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H7.28L7.823 3.368C7.9557 2.96959 8.21043 2.62305 8.5511 2.37752C8.89176 2.13198 9.30107 1.9999 9.721 2H14.28ZM17.997 7H6.003L6.865 19.071C6.88295 19.3232 6.99577 19.5592 7.18076 19.7316C7.36574 19.904 7.60916 19.9999 7.862 20H16.138C16.3908 19.9999 16.6343 19.904 16.8192 19.7316C17.0042 19.5592 17.117 19.3232 17.135 19.071L17.997 7ZM10 10C10.2449 10 10.4813 10.09 10.6644 10.2527C10.8474 10.4155 10.9643 10.6397 10.993 10.883L11 11V16C10.9997 16.2549 10.9021 16.5 10.7272 16.6854C10.5522 16.8707 10.313 16.9822 10.0586 16.9972C9.80416 17.0121 9.55362 16.9293 9.35817 16.7657C9.16271 16.6021 9.0371 16.3701 9.007 16.117L9 16V11C9 10.7348 9.10536 10.4804 9.29289 10.2929C9.48043 10.1054 9.73478 10 10 10ZM14 10C14.2652 10 14.5196 10.1054 14.7071 10.2929C14.8946 10.4804 15 10.7348 15 11V16C15 16.2652 14.8946 16.5196 14.7071 16.7071C14.5196 16.8946 14.2652 17 14 17C13.7348 17 13.4804 16.8946 13.2929 16.7071C13.1054 16.5196 13 16.2652 13 16V11C13 10.7348 13.1054 10.4804 13.2929 10.2929C13.4804 10.1054 13.7348 10 14 10ZM14.28 4H9.72L9.387 5H14.613L14.28 4Z"
          fill="#EF64B8"
        />
      </g>
      <defs>
        <clipPath id="clip0_467_24">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EditDelteButton;
