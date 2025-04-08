import { useEffect, useState } from "react";
import { CACHE_KEYS } from "../../constants/variables";
import { useDispatch } from "react-redux";
import { setTheme } from "../../store/themeSlice";
import { useTranslation } from "react-i18next";

const Init = ({ onInitDone }: { onInitDone: () => void }) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const [languageInitialized, setLanguageInitialized] = useState(false);

  const setAppTheme = () => {
    const theme = localStorage.getItem(CACHE_KEYS.theme);
    if (theme) {
      dispatch(setTheme(theme));
    }
  };

  const setAppLanguage = async () => {
    const language = localStorage.getItem(CACHE_KEYS.language);
    if (language && language !== i18n.language) {
      await i18n.changeLanguage(language);
    }
    setLanguageInitialized(true);
  };

  useEffect(() => {
    const initializeApp = async () => {
      setAppTheme();
      await setAppLanguage();
      onInitDone();
    };
    initializeApp();
  }, []);

  if (!languageInitialized) {
    return null;
  }

  return null;
};

export default Init;
