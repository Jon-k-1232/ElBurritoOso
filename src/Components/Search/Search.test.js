import * as React from "react";
import * as ReactDOM from "react-dom";
import searchPage from "./Search.js";


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<searchPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});