
import React from "react";
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import './Navigation.css'
import BurgerIcon from "../hamburger/BurgerIcon";
import Menu from "../hamburger/Menu.js";



const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "40px"
};
const contentStyle = {
    background: "rgba(255,255,255,0",
    width: "80%",
    border: "none"
};




export default function Navigation(){


    return (
        <header>
            <h2 id="homeLink"><Link to = "/"> El Burrito Oso </Link> </h2>
            <nav>
                <ol className="navLinks">
                    <li><Link to = "/search"> Find Burritos </Link></li>
                    <li><Link to = "/search"> Leave Review </Link></li>
                </ol>

                <div style={styles}>
                    <Popup
                        modal
                        overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                        contentStyle={contentStyle}
                        closeOnDocumentClick={false}
                        trigger={open => <BurgerIcon open={open} />}
                    >
                        {close => <Menu close={close} />}
                    </Popup>
                </div>
            </nav>
        </header>
    );

}
