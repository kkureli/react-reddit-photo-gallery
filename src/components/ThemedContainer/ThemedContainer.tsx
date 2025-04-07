import { Container } from "@mui/material";
import { ReactNode } from "react";
import useIsDarkThemeHook from "../../hooks/useIsDarkThemeHook";

interface ThemedContainerProps {
  children: ReactNode;
}

const ThemedContainer = ({ children }: ThemedContainerProps) => {
  const { isDarkTheme } = useIsDarkThemeHook();

  return (
    <Container
      className={isDarkTheme ? "dark-theme" : "light-theme"}
      sx={{
        padding: "20px",
        margin: "0 auto",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      {children}
    </Container>
  );
};

export default ThemedContainer;
