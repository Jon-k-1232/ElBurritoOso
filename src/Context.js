
import React from "react";




/*

CONTEXT IS ONLY SET LIKE THIS FOR THE STATIC APP TO BE SERVED DATA, THIS IS NOT FINAL

 */


const AppContext = React.createContext({

    restaurants: [
        {
            id: 1,
            name: 'Restaurant One',
            address: '123 N. Bob St. Glendale, AZ, 85308',
            phone: '623-123-4567',
            rating: '7.8'
        },
        {
            id: 2,
            name: 'Restaurant Two',
            address: '321 S. Two St. Glendale, AZ, 85308',
            phone: '623-765-4321',
            rating: '8.1'
        },
        {
            id: 3,
            name: 'Restaurant Three',
            address: '132 E. West St. Glendale, AZ, 85308',
            phone: '623-123-1232',
            rating: '6.7'
        }],

    reviews: [
        {
            review: 'This is a review for Restaurant One........... Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh ' +
                'elementum imperdiet.',
            rating: '7.9',
            restaurantId: 1,
        },
        {
            review: 'This is a review for Restaurant One/one........... Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh ' +
                'elementum imperdiet.',
            rating: '7.8',
            restaurantId: 1,
        },
        {
            review: 'This is a review1 for Restaurant Two........... Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh ' +
                'elementum imperdiet.',
            rating: '8.1',
            restaurantId: 2,
        },
        {
            review: 'This is a review1 for Restaurant Two/two........... Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh ' +
                'elementum imperdiet.',
            rating: '8.2',
            restaurantId: 2,
        },
        {
            review: 'This is a review for Restaurant Three........... Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh ' +
                'elementum imperdiet.',
            rating: '6.7',
            restaurantId: 3
        },
        {
            review: 'This is a review for Restaurant Three/three........... Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh ' +
                'elementum imperdiet.',
            rating: '6.8',
            restaurantId: 3
        }],
    newReviews:[],
    addReviews: () => {},
});



export default AppContext;


