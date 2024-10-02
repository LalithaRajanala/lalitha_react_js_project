import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";
import { SearchParams } from "./SearchParams";

// Your script goes here
const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
