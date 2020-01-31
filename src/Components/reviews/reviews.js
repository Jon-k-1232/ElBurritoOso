

import React from "react"
import '../reviews/reviews.css'
import Circle from "../ReviewCircle/Circle.js";


export default function Reviews() {

    return (
        <div className="reviewContainer">
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                    cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                    ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia
                    arcu eget nulla.
                </p>
            </div>

            <div className="reviewsCircle">
                <Circle/>
            </div>
        </div>
    );

}