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

              <div>
                  <h3>How it works:</h3>
              </div>

              <div>
                  <img src={bino} alt="search" id="searchInstruct"/>
                  <img src={ebook} alt="Read Reviews" id="readInstruct"/>
                  <img src={comment} alt="Leave Review" id="leaveInstruct"/>
              </div>

              <div className="instructions">
                  <div id="instructIto">Find a Burrito</div>
                  <div id="instructRead">Read Reviews</div>
                  <div id="instructLeave">Leave a Review</div>
              </div>

          </div>



        );

}