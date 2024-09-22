import React from "react";
import { createRoot }  from "react-dom";
import Pet from './Pet';

// Your script goes here
const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Mochi" animal="Dog" breed="Maltipoo" />
      <Pet name="Butter" animal="Dog" breed="Maltipoo" />
      <Pet name="Waffles" animal="Dog" breed="Maltipoo" />
      <Pet name="Snickers" animal="Dog" breed="Maltipoo" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
