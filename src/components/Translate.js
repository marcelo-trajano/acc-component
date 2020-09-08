import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Translator from "./Translator";

const options = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "pt",
    label: "Portuguese",
  },
  {
    value: "es",
    label: "Spanish",
  },
];

export default () => {
  const [language, setLanguage] = useState(options[1]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>type text here:</label>
          <div className="ui input">
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Translate..."
            />
          </div>
        </div>
      </div>
      <br />
      <Dropdown
        label="Select a language:"
        selected={language}
        onSelectChange={setLanguage}
        options={options}
      />
      <br />
      <Translator text={text} language={language} />
    </div>
  );
};
