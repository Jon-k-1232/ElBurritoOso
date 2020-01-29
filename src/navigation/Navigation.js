import React from "react";
import {Link} from "react-router-dom";
import './Navigation.css'


export default function Navigation() {

    return (
        <header>
            <h2 id="homeLink"><Link to = "/"> El Burrito Oso </Link> </h2>
            <nav>
                <ol className="navLinks">
                    <li><Link to = "/search"> Find Burritos </Link></li>
                    <li><Link to = "/review"> Leave Review </Link></li>
                </ol>
            </nav>
        </header>
    );

}




//<Link to = "/restaurant"> restaurant </Link> |