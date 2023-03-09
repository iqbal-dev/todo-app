import { FILTER_COLORS, FILTER_STATUS } from "./actionsType";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case FILTER_COLORS:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "add":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };
        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;
