import React from "react";
import { createRoot }  from "react-dom";
import Pet from './Pet';


// Your script goes here
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Mochi",
      animal: "Dog",
      breed: "Maltipoo"
    }),
    React.createElement(Pet, {
      name: "Butter",
      animal: "Dog",
      breed: "Maltipoo"
    }),
    React.createElement(Pet, {
      name: "Waffles",
      animal: "Dog",
      breed: "Maltipoo"
    }),
    React.createElement(Pet, {
      name: "Snickers",
      animal: "Dog",
      breed: "Maltipoo"
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
