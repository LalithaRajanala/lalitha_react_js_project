const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, "Maltipoo"),
  ]);
};

// Your script goes here
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, { name: "Mochi", animal: "Dog" }),
    React.createElement(Pet, { name: "Butter", animal: "Dog" }),
    React.createElement(Pet, { name: "Waffles", animal: "Dog" }),
    React.createElement(Pet, { name: "Snickers", animal: "Dog" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
