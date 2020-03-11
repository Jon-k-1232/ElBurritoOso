import * as React from "react";
import * as ReactDOM from "react-dom";
import Reviews from "./reviews.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Reviews />, div);
  ReactDOM.unmountComponentAtNode(div);
});
