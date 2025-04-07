import { Box } from "@mui/material";
import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import LanguagePicker from "../LanguagePicker/LanguagePicker";

type Props = {};

const Header = (props: Props) => {
  return (
    <Box
      marginBottom={2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <LanguagePicker />
      <ThemeSwitcher />
    </Box>
  );
};

export default Header;
