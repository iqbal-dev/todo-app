import { FILTER_COLORS, FILTER_STATUS } from "./actionsType";

export const filterByStatus = (value) => {
  return {
    type: FILTER_STATUS,
    payload: value,
  };
};
export const filterByColors = (color, changeType) => {
  return {
    type: FILTER_COLORS,
    payload: { color, changeType },
  };
};
