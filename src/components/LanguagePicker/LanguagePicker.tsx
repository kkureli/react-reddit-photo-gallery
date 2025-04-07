import { MenuItem, Select } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { CACHE_KEYS } from "../../constants/variables";
import useIsDarkThemeHook from "../../hooks/useIsDarkThemeHook";

const LanguagePicker = () => {
  const { i18n } = useTranslation();
  const onLanguageChange = (e: { target: { value: string } }) => {
    i18n.changeLanguage(e.target.value as string);
    localStorage.setItem(CACHE_KEYS.language, e.target.value);
  };
  const { isDarkTheme } = useIsDarkThemeHook();

  return (
    <Select
      value={i18n.language}
      onChange={onLanguageChange}
      sx={{
        minWidth: 100,
        color: isDarkTheme ? "white" : "black",
        ".MuiSelect-icon": {
          color: isDarkTheme ? "white" : "black",
        },
      }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="tr">Türkçe</MenuItem>
    </Select>
  );
};

export default LanguagePicker;
