import React, { useState } from "react";
import LanguageContext from "./LanguageContext";
import DisplayLanguages from "./DisplayLanguages";

function App() {
  const [language, setLanguage] = useState("English");
  const handleChangeLanguage = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };
  return (
    <div className='App'>
      <>
        <select value={language} onChange={handleChangeLanguage}>
          <option value='English'>English</option>
          <option value='Italiano'>Italiano</option>
        </select>
        <LanguageContext.Provider value={language}>
          <DisplayLanguages />
        </LanguageContext.Provider>
      </>
    </div>
  );
}

export default App;
