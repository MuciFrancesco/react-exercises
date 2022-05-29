import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

function DisplayLanguages() {
  const language = useContext(LanguageContext);
  return (
    <div>
      {language === "English" ? (
        <h3>Current language is: {language}</h3>
      ) : (
        <h3>Lingua corrente: {language}</h3>
      )}
    </div>
  );
}

export default DisplayLanguages;
