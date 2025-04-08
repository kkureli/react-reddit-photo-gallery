import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import useIsDarkThemeHook from "../../hooks/useIsDarkThemeHook";

interface HeaderProps {
  showBackButton?: boolean;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ showBackButton, onBack }) => {
  const { isDarkTheme } = useIsDarkThemeHook();

  return (
    <Box
      marginBottom={2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {showBackButton && (
        <IconButton
          onClick={onBack}
          data-testid="back-button"
          sx={{
            color: isDarkTheme ? "white" : "black",
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      )}
      <LanguagePicker />
      <ThemeSwitcher />
    </Box>
  );
};

export default Header;
