
import React from "react"
import './Home.css'
import {Link} from "react-router-dom";
import bino from "../images/bino.png"
import ebook from "../images/ebook.png"
import comment from "../images/comment.png"



export default class Home extends React.Component{

        render() {
            return (
                <main className="homeScreen">

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
                            <Link to = "/search">
                                <div className="instructSearch">
                                    <img src={bino} alt="search" id="searchInstruct"/>
                                    <h4 id="instructIto">Find a Burrito</h4>
                                </div>
                            </Link>

                            <Link to = "/search">
                                <div className="instructRead">
                                    <img src={ebook} alt="Read Reviews" id="readInstruct"/>
                                    <h4 id="instructRead">Read Reviews</h4>
                                </div>
                            </Link>

                            <Link to = "/search">
                                <div className="instructLeave">
                                    <img src={comment} alt="Leave Review" id="leaveInstruct"/>
                                    <h4 id="instructLeave">Leave a Review</h4>
                                </div>
                            </Link>
                        </div>

                    </div>
                </main>
            );
        }
}
