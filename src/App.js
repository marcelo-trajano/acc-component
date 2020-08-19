import React from "react";
import Accordion from "./components/Accordion";

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

export default () => {
  return (
    <div>
      <br></br>
      <Accordion items={items} />
    </div>
  );
};
