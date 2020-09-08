import React, { useState, useEffect } from "react";
import axios from "axios";
const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

export default (props) => {
  const [result, setResult] = useState("");
  const [text, setText] = useState(props.text);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setText(props.text);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [props.text]);

  useEffect(() => {
    const search = async () => {
      const data = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: props.language.value,
            key: KEY,
          },
        }
      );

      setResult(data.data.data.translations[0].translatedText);
    };
    search();
  }, [text, props.language]);

  return (
    <div className="ui form">
      <div className="field">
        <h3 className="ui header">Translation:</h3>
        <div>{result}</div>
      </div>
    </div>
  );
};
