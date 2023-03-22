import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <div>Hello World</div>;
};

const rootElement = document.getElementById("root");

if (rootElement) {
  // Replace the following line:
  // ReactDOM.render(<App />, rootElement);

  // With the following line:
  ReactDOM.createRoot(rootElement).render(<App />);
}
