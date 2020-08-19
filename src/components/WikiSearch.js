import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultList from "./ResultList";

const WikiSearch = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      const data = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });

      console.log(data.data.query.search);
      setResult(data.data.query.search);
    };

    const timeOut = setTimeout(() => {
      if (term) {
        search();
      }
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [term]);

  return (
    <div className="ui container">
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Wiki Search</label>
            <input
              className="field"
              type="text"
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
      <ResultList result={result} />
    </div>
  );
};

export default WikiSearch;
