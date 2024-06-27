import React, { createContext, useState, useEffect } from "react";
import uz from "../locals/uz.json";
import en from "../locals/en.json";
import ru from "../locals/ru.json";

const LanguageContext = createContext();

const languages = {
  uz,
  en,
  ru,
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("uz");
  const [text, setText] = useState(languages[language]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage && languages[storedLanguage]) {
      setLanguage(storedLanguage);
      setText(languages[storedLanguage]);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (languages[lang]) {
      setLanguage(lang);
      setText(languages[lang]);
      localStorage.setItem("language", lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, text, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
