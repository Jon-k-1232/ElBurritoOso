import React from "react"
import './home.css'
import {Carousel} from "react-responsive-carousel";
import bino from "../Components/images/bino.png"
import ebook from "../Components/images/ebook.png"
import comment from "../Components/images/comment.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Burrito_1 from "../Components/images/Burrito_1.jpg"
import Burrito_2 from "../Components/images/Burrito_2.jpg"
import Burrito_3 from "../Components/images/Burrito_3.jpg"
import Burrito_4 from "../Components/images/Burrito_4.jpg"
import Burrito_5 from "../Components/images/Burrito_5.jpg"




export default class Home extends React.Component{

        render() {
            return (
                <div className="homeScreen">

                    <div className="homeStatement">
                        <h1>The best reviews of <br/> the best burritos.</h1>
                    </div>

                    <div>
                        <h3>How it works:</h3>
                    </div>

                    <div className="instructions">
                        <div className="instructSearch">
                            <img src={bino} alt="search" id="searchInstruct"/>
                            <div id="instructIto">Find a Burrito</div>
                        </div>

                        <div className="instructRead">
                            <img src={ebook} alt="Read Reviews" id="readInstruct"/>
                            <div id="instructRead">Read Reviews</div>
                        </div>

                        <div className="instructLeave">
                            <img src={comment} alt="Leave Review" id="leaveInstruct"/>
                            <div id="instructLeave">Leave a Review</div>
                        </div>
                    </div>


                    <Carousel className="carouselContainer"
                        autoPlay={false}
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

                </div>


            );
        }
}