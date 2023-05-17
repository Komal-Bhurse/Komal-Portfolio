import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";


import "./portfolio.css";
import port1 from "./cryptocoin.png";
import port2 from  "./cakeat.png";

function Portfolio() {
  return (
    <>
    <section className="portfolio section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">Most recent work</span>
            <div className="portfolio_container container">


               <Swiper
               
                cssMode={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                autoplay={{
                     delay: 2700,
                }}
                speed={1000}
                modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
                className="mySwiper"
                >
                    
                    {/* <!--------------Portfolio 1--------------> */}
                    <SwiperSlide className="portfolio_content grid ">
                        <img src={port1} alt="" className="portfolio_img"/>
                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Crypto Coin</h3>
                            <p className="portfolio_description">Complete responsive dynamic single page website,
                                Crypto Coin shows real time current information about the crypto coins.
                            </p>

                                <a href="https://cryptocoin-3z6dhqi11-komal-bhurse.vercel.app" target="_blank" rel="noreferrer" className="button button--flex button--small portfolio_button">
                                Demo
                                <i className="uil uil-arrow-right button_icon"></i>
                            </a>
                               
                            
                        </div>
                    </SwiperSlide>
                   
                    {/* <!--------------Portfolio 2--------------> */}
                    <SwiperSlide className="portfolio_content grid">
                        <img src={port2} alt="" className="portfolio_img"/>
                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Cakeat</h3>
                            <p className="portfolio_description">Cakeat is an E-commerce Websites adaptable to all devices, with attractive ui components
                                .</p>

                                <a href="https://cakeat.onrender.com" target="_blank" rel="noreferrer" className="button button--flex button--small portfolio_button">
                                Demo
                                <i className="uil uil-arrow-right button_icon"></i>
                            </a>
                                
                            
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <!--add arrows-->  */}
                {/* <div className="swiper-button-next">
                    <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
                </div> */}
                {/* <!--add pagination--> */}
                 {/* <div className="swiper-pagination"></div> */}
            </div>
        </section>
        </>
  );
}

export default Portfolio;