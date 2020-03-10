import * as React from "react";
import * as ReactDOM from "react-dom";
import Search from "./Search.js";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Search />, div);
  ReactDOM.unmountComponentAtNode(div);
});


/*

//mimics JSON object
    const arr = {
        results: [
            {
                name: "Bobs",
                place_id: "123456c",
                vicinity: "123 test street, glendale, az",
                geometry: {
                  location: {
                    lat: 33.636092,
                    lng: -111.918482
                  }
                }
            }
        ]
      };
 */