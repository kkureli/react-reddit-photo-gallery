import React from "react";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import useIsDarkTheme from "../../hooks/useIsDarkThemeHook";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { CACHE_KEYS } from "../../constants/variables";

const ThemeSwitcher: React.FC = () => {
  const { isDarkTheme } = useIsDarkTheme();
  const dispatch = useDispatch();
  const changeTheme = () => {
    localStorage.setItem(CACHE_KEYS.theme, isDarkTheme ? "light" : "dark"); // Save to localStorage
    dispatch(toggleTheme());
  };
  return (
    <IconButton
      onClick={changeTheme}
      sx={{
        color: isDarkTheme ? "white" : "black",
      }}
    >
      {isDarkTheme ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeSwitcher;
