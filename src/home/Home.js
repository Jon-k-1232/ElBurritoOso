import React from "react"
import './home.css'
import PhotoCarousel from "../Components/carousel/Carousel.js";
import bino from "../Components/images/bino.png"
import ebook from "../Components/images/ebook.png"
import comment from "../Components/images/comment.png"




export default function Home(){


        return(
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

              <PhotoCarousel/>

          </div>



        );

}