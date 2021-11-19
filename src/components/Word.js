import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Word.css";
import { Spinner } from "react-bootstrap";

let language = "en";

export default function Word_() {
  const [meaning, setMeaning] = useState(null);

  const [defined, setDefined] = useState(true);

  const [loading, setLoading] = useState(false);

  const getWord = async (word, lang) => {
    setLoading(true);
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`
    );

    const result = await response.json();
    setLoading(false);
    console.log(result);
    if (!result.title) {
      setMeaning(result[0]);
      setDefined(true);
    } else {
      setDefined(false);
    }
  };

  useEffect(() => {
    getWord("dictionary", "en");
    // eslint-disable-next-line
  }, []);

  const title1 = {
    en: {
      speech: "Part of Speech: ",
      error: "No definition available. Please search another word.",
      example: " Example: ",
      origin: "Origin: ",
      phonetic: "Phonetics: "
    },
    it: {
      speech: "Parte del discorso: ",
      error: "Nessuna definizione è disponibile. Cerca un'altra parola.",
      example: " Esempio: ",
      origin: "Origine: ",
      phonetic: "Fonetica: "
    },
    fr: {
      speech: "Partie du discours: ",
      error: "Aucune définition disponible. Cherchez un autre mot.",
      example: " Example: ",
      origin: "Origine: ",
      phonetic: "Phonétique: "
    }
  };

  const inputRef = useRef();
  console.log(language);
  const searchNewWord = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      getWord(inputRef.current.value, language);
    }
  };

  const handleLanguage = (e) => {
    console.log(e.target.value);
    /* setLanguage(e.target.value); */
    language = e.target.value;
  };

  return (
    <div>
      <div>
        <form onSubmit={searchNewWord}>
          {/*   <label>
            Choose a word: */}
          <input
            className="form-item"
            ref={inputRef}
            /* onChange={getData} */
            type="text"
            /*   value="pull" */
            name="word"
            id=""
            placeholder="Choose a word "
          />

          <select
            className="form-item"
            onChange={(e) => handleLanguage(e)}
            /*  value={language} */
            name="languages"
            id="language-select"
          >
            <option value="en">English</option>
            <option value="it">Italian</option>
            <option value="fr">French</option>
          </select>

          <input
            className="form-item form-item-three"
            type="submit"
            value="Seek & you shall find"
          />
        </form>
      </div>

      {!defined && <p className="error">{title1[language].error}</p>}
      {loading && <Spinner className="spinner" animation="border" />}

      {defined && !loading && meaning && (
        <div>
          <div className="intro">
            <h2>{meaning.word}</h2>
            <div>
              <div>
                {meaning.origin && (
                  <span className="entry">{title1[language].origin}</span>
                )}
                {meaning.origin}
              </div>
              <div>
                {meaning.phonetic && (
                  <span className="entry">{title1[language].phonetic}</span>
                )}{" "}
                {meaning.phonetic}
              </div>
              <div>
                {meaning.phonetics[0].audio && (
                  <div className="audio">
                    <p className="entry">Audio:&nbsp;&nbsp; </p>
                    <audio controls src={meaning.phonetics[0].audio}>
                      Your browser does not support the
                      <code>audio</code> element.
                    </audio>
                  </div>
                )}
              </div>
              <div>
                {meaning &&
                  meaning.meanings.map((currentValue) => {
                    return (
                      <div key={uuidv4()}>
                        <div>
                          <span className="entry">
                            {" "}
                            {title1[language].speech}
                          </span>
                          {/* {language == "en" ? "Part Of Speech:" : language == "it" ? "Parola:" : ""}  */}
                          {currentValue.partOfSpeech}
                        </div>
                        <div>
                          {currentValue.definitions.map(
                            (currentValue, index) => {
                              return (
                                <ul key={uuidv4()}>
                                  <li>
                                    {currentValue.definition}
                                    {currentValue.example && (
                                      <span className="entry">
                                        {title1[language].example}
                                      </span>
                                    )}{" "}
                                    {currentValue.example}
                                    {/*  {currentValue.example &&
                                  `${title1[language].example} ${
                                    currentValue.example
                                  }`}  */}
                                  </li>
                                </ul>
                              );
                            }
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
