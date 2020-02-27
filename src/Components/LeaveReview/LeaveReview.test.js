import * as React from "react";
import * as ReactDOM from "react-dom";
import leaveReviewPage from "./LeaveReview";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<leaveReviewPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});