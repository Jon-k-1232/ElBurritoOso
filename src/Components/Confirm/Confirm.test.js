import * as React from "react";
import * as ReactDOM from "react-dom";
import confirmReviewPage from "./Confirm.js";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<confirmReviewPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});