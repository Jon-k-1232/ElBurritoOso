import * as React from "react";
import * as ReactDOM from "react-dom";
import Circle from "./Circle.js";

it("renders without crashing", () => {
  const props = {
    rating: 1.1
  };

  const div = document.createElement("div");
  ReactDOM.render(<Circle {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
