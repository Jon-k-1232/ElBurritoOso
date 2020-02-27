import * as React from "react";
import * as ReactDOM from "react-dom";
import confirm from "./Confirm.js";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<confirm />, div);
    ReactDOM.unmountComponentAtNode(div);
});