import * as React from "react";
import * as ReactDOM from "react-dom";
import leaveReview from "./LeaveReview";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<leaveReview />, div);
    ReactDOM.unmountComponentAtNode(div);
});