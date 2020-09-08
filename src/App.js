import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Route from "./components/Route";
import WikiSearch from "./components/WikiSearch";
import Dropdown from "./components/Dropdown";
//import Dropdown from "./components/Translate";
import Translate from "./components/Translate";
import { within } from "@testing-library/react";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JavaScript Library!",
  },
  {
    title: "Why use React?",
    content: "React is the most used front end js library",
  },
  {
    title: "How do you use React?",
    content: "You use React by create components",
  },
];

const options = [
  {
    value: "red",
    label: "Color Red",
  },
  {
    value: "green",
    label: "Color Green",
  },
  {
    value: "blue",
    label: "Color Blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <br />
      <Route path="/">
        <Accordion items={items}></Accordion>
      </Route>
      <Route path="/list">
        <WikiSearch></WikiSearch>
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select color:"
          selected={selected}
          onSelectChange={setSelected}
          options={options}
        ></Dropdown>
      </Route>
      <Route path="/translate">
        <Translate items={items}></Translate>
      </Route>
    </div>
  );
};
