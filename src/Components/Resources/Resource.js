import React from 'react';
import res1 from "./Images/Res1.svg";
import res2 from "./Images/Res2.svg";
import res3 from "./Images/Res3.svg";
import BottomImage from  "./Images/Bottom.svg";
import './Resource.css';

function Resource() {
    return (
        <>
            <div id="resource">
            <div className="resources">
                <h1 className="resTitle">Resources</h1>
                <p className="resSubtitle">Resources that will help you Live up to your Financial Potential</p>
                <div className="boxes">
                    <div className="block">
                        <img src={res1} />
                        <h3 className="ImgTitle">Investopedia</h3>
                        <p className="ImgsubTitle">Excellent source for understanding financial concepts</p>
                    </div>
                    <div className="block">
                        <img src={res2} />
                        <h3 className="ImgTitle">Morningstar Investing Classroom</h3>
                        <p className="ImgsubTitle">Prepare An Investment Policy Statement</p>
                        
                    </div>
                    <div className="block">
                        <img src={res3} />
                        <h3 className="ImgTitle">Khan Academy</h3>
                        <p className="ImgsubTitle">Coursework is organized with videos and optional practice exercises to reinforce your learning</p>
                    </div>
                </div>
                {/* <p>Find More</p> */}
            </div>
            <div>
                <footer>
              <img className="btmimg" src={BottomImage}/>
                    <div>
                        <p className="learn">Learn more about us and those connected to us...</p>

                        <div className="bottomBtn">
                        <div className="buttonbtm">About Us</div>
                        <div className="buttonbtm">Sponsors</div>
                        <div className="buttonbtm">Reach Us</div>
                        </div>
                    </div>
                </footer>
            </div>
            </div>
        </>
    )
}

export default Resource;
