import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useIsDarkThemeHook from "../../hooks/useIsDarkThemeHook";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  onChange: (value: string) => void;
  placeholder?: string;
  input: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onChange,
  placeholder,
  input,
}) => {
  const { t } = useTranslation();

  const { isDarkTheme } = useIsDarkThemeHook();
  return (
    <TextField
      fullWidth
      variant="outlined"
      value={input}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      placeholder={placeholder ? placeholder : t("search")}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: isDarkTheme ? "#333" : "#fff",
        color: isDarkTheme ? "#fff" : "#000",
        input: {
          color: isDarkTheme ? "white" : "#000",
          "&::placeholder": {
            opacity: 1,
          },
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: isDarkTheme ? "#555" : "#ccc",
          },
          "&:hover fieldset": {
            borderColor: isDarkTheme ? "#777" : "#888",
          },
          "&.Mui-focused fieldset": {
            borderColor: isDarkTheme ? "#aaa" : "#000",
          },
        },
      }}
    />
  );
};

export default SearchBar;
