import * as React from "react";
import * as ReactDOM from "react-dom";
import Circle from "./Circle.js";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Circle />, div);
    ReactDOM.unmountComponentAtNode(div);
});