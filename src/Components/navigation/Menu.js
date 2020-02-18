
import React from "react";
import "./Navigation.css"
import {Link} from "react-router-dom";

export default ({ close }) => (
    <div className="menu">
        <ul>
            <li onClick={close}><Link to = "/search"> Find Burritos </Link></li>
            <li onClick={close}><Link to = "/search"> Leave Review </Link></li>
        </ul>
    </div>
);


/*
HANDLES THE LINKS AND ITEMS FOR THE HAMBURGER MENU
 */