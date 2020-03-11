import * as React from "react";
import * as ReactDOM from "react-dom";
import Maps from "./map.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Maps />, div);
  ReactDOM.unmountComponentAtNode(div);
});
