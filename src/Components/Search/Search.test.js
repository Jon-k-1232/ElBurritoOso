import * as React from "react";
import * as ReactDOM from "react-dom";
import Search from "./Search.js";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
});