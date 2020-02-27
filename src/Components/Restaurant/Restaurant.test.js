import * as React from "react";
import * as ReactDOM from "react-dom";
import Restaurant from "./Restaurant.js";



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Restaurant />, div);
    ReactDOM.unmountComponentAtNode(div);
});
