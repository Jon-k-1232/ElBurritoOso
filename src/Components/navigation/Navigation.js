
import React from "react";
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import './Navigation.css'
import BurgerIcon from "./BurgerIcon.js";
import Menu from "./Menu.js";



const styles = {
    textAlign: "center",
    marginTop: "40px"
};
const contentStyle = {
    background: "#ff4700f2;",
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
                        overlayStyle={{ background: "#ff4700f2;" }}
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
