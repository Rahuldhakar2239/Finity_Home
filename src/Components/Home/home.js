import React from 'react';
import TopImage from "./Images/Main.svg";
import book1 from "./Images/Book1.png";
import book2 from "./Images/Book2.png";
import book3 from "./Images/Book3.png";
import book4 from "./Images/Book4.png";
import Playlist from "../Playlist/Playlist";
import Resource from '../Resources/Resource';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ProgressBar from 'react-bootstrap/ProgressBar'
import "./home.css"
export default function Home() {
    return (
        <>
            <div className="section">
                <div id="section1">
                    <div className="container">
                        <div className="row">
                            <div className="main-div">
                                {/* <div className="col-lg-6 col-md-6 col-sm-10 col-10"> */}
                                <div>
                                    <h3 className="top-heading">Free and open stock market and financial education</h3>
                                   
                                    <p className="top-text">Think of Finity as your new best friend, helping you towards your journey to Financial Literacy.
                                        We have an extensive and in-depth collection of the stock market and financial <span className="links">lessons</span>,
                                        along with an extensive collection of <span className="links">Books</span>, <span className="links">Podcasts</span>, <span className="links">Playlists</span>, & <span className="links">Resources</span> specifically curated by our Team to help you navigate to your Best Financially-educated self. It is openly accessible to everyone and is one of the largest financial education resources on the web.</p>
                                    <p className="top-textp2 mt-4">Checkout & be a part of our community. Enter the <span className="links">Forum</span>.</p>
                                </div>
                                {/* </div> */}

                                {/* <div className="col-lg-6 col-md-6 col-sm-10 col-10"> */}
                                <div>
                                    <img className="top-Image" src={TopImage}></img>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>



                <div id="section2">
                    <div className="container">
                        <div className="row">
                            <div className="module-div">
                                <h4 className="module">Modules</h4>
                                <p className="small-title">Basics of Finance and Trading</p>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-8 cards-div">
                                <div className="card module-cards">
                                    <h4 className="title"><span className="no">1.</span> Introduction to Stock Markets</h4>

                                    <div>
                                    <p className="chapter">15 chapters</p>
                                    <ProgressBar id="progress" variant="success" now={60}></ProgressBar>
                                    </div>
                                    <p className="card-text">Investing ensures financial security, and the Stock market plays a pivotal role in this domain, it is a place where people buy/sell shares of publicly listed companies. In this module, you will learn about the fundamentals of the stock market, how to get started, how it functions and the various intermediaries that appertain it.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-8 cards-div">
                                <div className="card module-cards">
                                    <h4 className="title"><span className="no">2.</span>Technical Analysis</h4>
                                    <div>
                                    <p className="chapter">110 chapters</p>
                                    <ProgressBar id="progress" variant="success" now={60}></ProgressBar>
                                    </div>
                                    <p className="card-text">Technical Analysis (TA) plays an important role in developing a point of view. Like every other research, TA also has its own attributes. In this module, we will discover all those complex attributes of TA, study various patterns, indicators and theories that will help you as a trader to find upright trading opportunities in the…</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-8 cards-div">
                                <div className="card module-cards">
                                    <h4 className="title"><span className="no">3.</span>Fundamental Analysis</h4>
                                    <div>
                                    <p className="chapter">13 chapters</p>
                                    <ProgressBar id="progress" variant="success" now={60}></ProgressBar>
                                    </div>
                                    <p className="card-text">Fundamental Analysis (FA) is a holistic approach to study a business. If you are an investor that is looking for long term investments this module will help you understand Equity research, help you in reading the financial statements, annual reports, calculation of Financial Ratio, Analysis and most importantly help you…</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-8 cards-div">
                                <div className="card module-cards">
                                    <h4 className="title"><span className="no">4.</span>Futures Trading</h4>
                                    <div>
                                    <p className="chapter">17 chapters</p>
                                    <ProgressBar id="progress" variant="success" now={60}></ProgressBar>
                                    </div>
                                    <p className="card-text">Futures Trading involves trading in contracts in the derivatives markets. This module covers the various intricacies involved in undergoing a futures trade including margins, leverages, pricing, etc</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-8 cards-div">
                                <div className="card module-cards">
                                    <h4 className="title"><span className="no">5.</span> Options Theory for Professional Trading</h4>
                                    <div>
                                    <p className="chapter">12 chapters</p>
                                    <ProgressBar id="progress" variant="success" now={60}></ProgressBar>
                                    </div>
                                    <p className="card-text">An option is a contract where the price of the options is based on an underlying. Options contracts grant the buyer the right to buy the underlying without a compulsory obligation.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-8 cards-div">
                                <div className="card module-cards">
                                    <h4 className="title"><span className="no">6.</span> Option Strategies</h4>
                                    <div>
                                    <p className="chapter">13 chapters</p>
                                    <ProgressBar id="progress" variant="success" now={60}></ProgressBar>
                                    </div>
                                    <p className="card-text">The module covers various options strategies that can be built with a multi-dimensional approach based on Market trend involving Option Greeks, Risk-Return, etc.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-8 cards-div">
                                <div className="card module-cards">
                                    <h4 className="title"><span className="no">7.</span> Markets and Taxation</h4>
                                    <div>
                                    <p className="chapter">16 chapters</p>
                                    <ProgressBar id="progress" variant="success" now={60}></ProgressBar>
                                    </div>
                                    <p className="card-text">As a trader in India, you should be informed of all the taxes that are levied on your investments and account. This module overlays the taxation countenance of Investing/Trading in the Markets. It also outlines the various essential topics like calculation of your turnover, how to prepare a balance sheet and the P&L statement, and further about how you can file your Income Tax Returns.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-8 cards-div">
                                <div className="card module-cards">
                                    <h4 className="title"><span className="no">8.</span> Currency, Commodity, and Government Securities</h4>
                                    <div>
                                    <p className="chapter">13 chapters</p>
                                    <ProgressBar id="progress" variant="success" now={60}></ProgressBar>
                                    </div>
                                    <p className="card-text">This module covers the Currency,  MCX Commodity contract, and the Government Securities (GSec) traded in the Indian Markets.</p>
                                </div>
                            </div>

                            <p className="check-update">Check updates...</p>
                        </div>
                    </div>
                </div>

                <div id="section3">

                    <div className="container">
                        <div className="row">
                            <div className="module-div">
                                <h4 className="module">Books</h4>
                                <p className="small-title">Level up by reading the best books in the industry</p>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="card book-cards">
                                    <img src={book1} />
                                    <div className="card-body book-des-div">
                                        <h4 className="book-title">A Random Walk Down Wall Street</h4>
                                        <p className="book-text"> Burton Malkiel</p>

                                        <div className="book-btn">
                                            <p className="button">Dive in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="card book-cards">
                                    <img src={book2} />
                                    <div className="card-body book-des-div">
                                        <h4 className="book-title">The Intelligent Investor</h4>
                                        <p className="book-text"> Benjamin Graham</p>

                                        <div className="book-btn">
                                            <p className="button">Dive in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="card book-cards">
                                    <img src={book3} />
                                    <div className="card-body book-des-div">
                                        <h4 className="book-title">One Up on Wall Street</h4>
                                        <p className="book-text"> John Rothchild and Peter Lynch</p>

                                        <div className="book-btn">
                                            <p className="button">Dive in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                <div className="card book-cards">
                                    <img src={book4} />
                                    <div className="card-body book-des-div">
                                        <h4 className="book-title">Little Book of Common Sense Investing</h4>
                                        <p className="book-text"> John C. Bogle</p>

                                        <div className="book-btn">
                                            <p className="button">Dive in</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <Playlist/>
                <Resource/>
            </div>

        </>
    );
}