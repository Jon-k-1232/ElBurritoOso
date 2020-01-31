import React from "react"
import { SocialIcon } from 'react-social-icons';
import "./Footer.css"


export default function Footer(){

    return(
        <footer>
            <div className="socialMedia">
                <SocialIcon network="twitter" fgColor="#fff" id="twitter"/>
                <SocialIcon network="facebook" fgColor="#fff" id="fb"/>
                <SocialIcon network="instagram" fgColor="#fff" id="insta"/>
            </div>
            <p>Built by Jon Kimmel</p>
        </footer>
    );

}