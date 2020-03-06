import * as React from "react";
import * as ReactDOM from "react-dom";
import LeaveReview from "./LeaveReview";

it("renders without crashing", () => {
  const props = {
    match: {
      params: {
        id: ""
      }
    }
  };
  const div = document.createElement("div");
  ReactDOM.render(<LeaveReview {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
