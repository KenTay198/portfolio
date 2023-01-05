export const initialState = {
  initialized: false,
  theme: "",
};

export const ColorThemeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "INITIALIZE_THEME":
      return {
        ...state,
        theme: action.payload.theme,
        initialized: true,
      };
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
