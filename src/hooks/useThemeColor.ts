import { lightThemeColors, darkThemeColors } from "../theme/colors";
import useIsDarkThemeHook from "./useIsDarkThemeHook";

const useThemeColor = () => {
  const { isDarkTheme } = useIsDarkThemeHook();
  return isDarkTheme ? darkThemeColors : lightThemeColors;
};

export default useThemeColor;
