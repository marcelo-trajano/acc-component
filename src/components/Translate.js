import React, { useState } from "react";
import Dropdown from "./Dropdown";

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
  const [language, setLanguage] = useState(options[0]);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>type text here:</label>
          <div className="ui input">
            <input type="text" placeholder="Translate..." />
          </div>
        </div>
      </div>
      <Dropdown
        label="Select a language:"
        selected={language}
        onSelectChange={setLanguage}
        options={options}
      />
    </div>
  );
};
