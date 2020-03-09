import * as React from "react";
import * as ReactDOM from "react-dom";
import submitted from "./submitted.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<submitted />, div);
  ReactDOM.unmountComponentAtNode(div);
});
