import React from "react";
import "./home.css";
import Blob from "./Blob";

function Home() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            <div className="home_social">
              <a
                href="https://www.linkedin.com/in/komal-bhurse-510776225/"
                target="_blank" rel="noreferrer"
                className="home_social-icon"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://www.instagram.com/komal_bhurse_30/"
                target="_blank" rel="noreferrer"
                className="home_social-icon"
              >
                <i className="uil uil-instagram"></i>
              </a>
              <a
                href="https://github.com/Komal-Bhurse"
                target="_blank" rel="noreferrer"
                className="home_social-icon"
              >
                <i className="uil uil-github-alt"></i>
              </a>
            </div>
            <div className="home_img">
              <Blob className="home_blob" />
              
            </div>
            <div className="home_data">
              <h1 className="home_title">Hi, I'am Komal</h1>
              <h3 className="home_subtitle">MERN Stack devoloper</h3>
              <p className="home_description">
                Focus on building a beautiful and responsive Websites.
              </p>

              <a href="mailto:komalbhurse3@gmail.com" className="button buttton--flex">
                Hired Me <i className="uil uil-message button_icon"></i>
              </a>
            </div>
          </div>
          <div className="home_scroll">
            <a href="#about" className="home_scroll-button button--flex">
              <i className="uil uil-mouse-alt home_scroll-mouse"></i>
              <span className="home_scroll-name">Scroll down</span>
              <i className="uil uil-arrow-down home_scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
