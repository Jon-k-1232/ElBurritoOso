
import React from "react"
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Burrito_1 from "../images/Burrito_1.jpg"
import Burrito_2 from "../images/Burrito_2.jpg"
import Burrito_3 from "../images/Burrito_3.jpg"
import Burrito_4 from "../images/Burrito_4.jpg"
import Burrito_5 from "../images/Burrito_5.jpg"
import './Carousel.css'



export default function PhotoCarousel(){

    return(
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            interval={4000}
        >
            <div>
                <img src={Burrito_1} alt="burrito" id="photo1"/>
            </div>
            <div>
                <img src={Burrito_2} alt="burrito" id="photo2"/>
            </div>
            <div>
                <img src={Burrito_3} alt="burrito" id="photo3"/>
            </div>
            <div>
                <img src={Burrito_4} alt="burrito" id="photo4"/>
            </div>
            <div>
                <img src={Burrito_5} alt="burrito" id="photo5"/>
            </div>
        </Carousel>
    );

}