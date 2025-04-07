import React, { useEffect } from "react";
import { CACHE_KEYS } from "../../constants/variables";
import { useDispatch } from "react-redux";
import { setTheme } from "../../store/themeSlice";
import { useTranslation } from "react-i18next";

const Init = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const setAppTheme = () => {
    const theme = localStorage.getItem(CACHE_KEYS.theme);
    if (theme) {
      dispatch(setTheme(theme));
    }
  };

  const setAppLanguage = () => {
    const language = localStorage.getItem(CACHE_KEYS.language);
    if (language) {
      i18n.changeLanguage(language);
    }
  };

  const initializeApp = () => {
    setAppTheme();
    setAppLanguage();
  };

  useEffect(() => {
    initializeApp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default Init;
