import React, { Component } from "react";
import LanguageContext from "./LanguageContext";

export class DisplayLanguages extends Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            console.log(language);
            return (
              <div>
                <h1>
                  {language === "it"
                    ? "Hai selezionato la lingua italiana"
                    : "you have selected the English language"}
                </h1>
              </div>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
export default DisplayLanguages;
