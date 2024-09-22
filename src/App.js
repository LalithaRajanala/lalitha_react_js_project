const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Maltipoo"),
  ]);
};

// Your script goes here
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, { name: "Mochi" }),
    React.createElement(Pet, { name: "Butter" }),
    React.createElement(Pet, { name: "Waffles" }),
    React.createElement(Pet, { name: "Snickers" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
