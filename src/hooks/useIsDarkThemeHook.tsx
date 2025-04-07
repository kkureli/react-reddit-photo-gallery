import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useIsDarkThemeHook = () => {
  const isDarkTheme = useSelector(
    (state: RootState) => state.theme.mode === "dark"
  );

  return { isDarkTheme };
};

export default useIsDarkThemeHook;
