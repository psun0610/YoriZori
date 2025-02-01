import { IngredientType } from "types/IngredientType";

export interface IngredientDetailType
  extends Omit<IngredientType, "defaultExpDate"> {
  expDate: string;
  putDate: string;
  storagePlace: "COLD" | "OUTSIDE" | "FROZEN";
  ingredientId: number;
  dday: number;
}
