
import React from "react"
import './home.css'
import {Carousel} from "react-responsive-carousel";
import bino from "../images/bino.png"
import ebook from "../images/ebook.png"
import comment from "../images/comment.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Burrito_1 from "../images/Burrito_1.jpg"
import Burrito_2 from "../images/Burrito_2.jpg"
import Burrito_3 from "../images/Burrito_3.jpg"
import Burrito_4 from "../images/Burrito_4.jpg"
import Burrito_5 from "../images/Burrito_5.jpg"




export default class home extends React.Component{

        render() {
            return (
                <div className="homeScreen">

                    <div className='welcome'>
                        <div className="homeStatement">
                            <h1>The best reviews of <br/> the best burritos.</h1>
                        </div>

                    </div>



                    <div className="action">
                        <div>
                            <h2>How it works:</h2>
                        </div>

                        <div className="instructions">
                            <div className="instructSearch">
                                <img src={bino} alt="search" id="searchInstruct"/>
                                <h4 id="instructIto">Find a Burrito</h4>
                            </div>

                            <div className="instructRead">
                                <img src={ebook} alt="Read Reviews" id="readInstruct"/>
                                <h4 id="instructRead">Read Reviews</h4>
                            </div>

                            <div className="instructLeave">
                                <img src={comment} alt="Leave Review" id="leaveInstruct"/>
                                <h4 id="instructLeave">Leave a Review</h4>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2>Recent User Photos:</h2>
                    </div>


                    <Carousel className="carouselContainer"
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        interval={3000}
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





