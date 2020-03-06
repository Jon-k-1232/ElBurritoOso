import * as React from "react";
import * as ReactDOM from "react-dom";
import Confirm from "./Confirm.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Confirm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
