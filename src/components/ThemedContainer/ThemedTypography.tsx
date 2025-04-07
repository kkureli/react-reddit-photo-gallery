import { Typography, TypographyProps } from "@mui/material";
import "./ThemedTypography.css";
import useIsDarkThemeHook from "../../hooks/useIsDarkThemeHook";

const ThemedTypography = (props: TypographyProps) => {
  const { isDarkTheme } = useIsDarkThemeHook();
  return (
    <Typography
      {...props}
      className={isDarkTheme ? "dark-theme" : "light-theme"}
    />
  );
};

export default ThemedTypography;
