import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import useThemeColor from "../../hooks/useThemeColor";

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
  const themeColors = useThemeColor();

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
        backgroundColor: themeColors.searchBarBackground,
        color: themeColors.searchBarText,
        input: {
          color: themeColors.searchBarText,
          "&::placeholder": {
            opacity: 1,
          },
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: themeColors.searchBarBorder,
          },
          "&:hover fieldset": {
            borderColor: themeColors.searchBarHoverBorder,
          },
          "&.Mui-focused fieldset": {
            borderColor: themeColors.searchBarText,
          },
        },
      }}
    />
  );
};

export default SearchBar;
