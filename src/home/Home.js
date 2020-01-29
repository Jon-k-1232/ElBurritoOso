import React from "react"
import './home.css'
import bino from "../images/bino.png"
import ebook from "../images/ebook.png"
import comment from "../images/comment.png"



export default function Home(){


        return(
          <div className="homeScreen">

              <div id="homeStatement">
                  <h1>The best reviews of <br/> the best burritos.</h1>
              </div>

                  <h3>How it works:</h3>

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







          </div>



        );

}