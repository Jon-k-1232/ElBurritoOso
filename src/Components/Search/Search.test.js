import * as React from "react";
import * as ReactDOM from "react-dom";
import Search from "./Search.js";

it("renders without crashing", () => {
  const arr = "results"[
    {
      name: "Bobs",
      id: "123456",
      vicinity: "123 test street, glendale, az",
      geometry: {
        location: {
          lat: 33.636092,
          lng: -111.918482
        }
      }
    }
  ];

  const div = document.createElement("div");
  ReactDOM.render(<Search {...arr} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
