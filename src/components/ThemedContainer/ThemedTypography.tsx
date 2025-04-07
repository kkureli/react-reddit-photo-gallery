import { Typography, TypographyProps } from "@mui/material";
import useIsDarkThemeHook from "../../hooks/useIsDarkThemeHook";

const ThemedTypography = (props: TypographyProps) => {
  const { isDarkTheme } = useIsDarkThemeHook();
  return (
    <Typography
      {...props}
      className={isDarkTheme ? "dark-theme-text" : "light-theme-text"}
    />
  );
};

export default ThemedTypography;
