import React, { createContext, useContext, useReducer } from "react";
import { ColorThemeReducer, initialState } from "./ColorThemeReducer";

const ColorThemeContext = createContext();

export const useColorTheme = () => useContext(ColorThemeContext);

export const ColorThemeProvider = ({ children }) => (
  <ColorThemeContext.Provider
    value={useReducer(ColorThemeReducer, initialState)}
  >
    {children}
  </ColorThemeContext.Provider>
);
