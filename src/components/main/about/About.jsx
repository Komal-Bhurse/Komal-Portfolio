import React from "react";
import about from "./ab.png";
import resume from "./Resume-KomalBhurse.pdf"
import "./about.css";

function About() {
  return (
    <>
    <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My introduction</span>
            <div className="about_container container grid">
                <img src={about} alt="" className="about_img" />
                <div className="about_data">
                    <p className="about_discription">Full stack web devoloper with extensive knowledge and year of
                        experience, working in frontend and backend technologies and delivering quality work.</p>
                    <div className="about_info">
                        <div>
                            <span className="about_info-title">01+</span>
                            <span className="about_info-name">Years <br/> experience</span>
                        </div>
                        <div>
                            <span className="about_info-title">03+</span>
                            <span className="about_info-name">Complited <br/> project</span>
                        </div>
                        <div>
                            {/* <span className="about_info-title"></span>
                            <span className="about_info-name">companies <br/> worked </span> */}
                        </div>
                    </div>
                    <div className="about_buttons">

                        <a download="" href={resume} className="button button--flex">
                            download CV <i className="uil uil-download-alt button--flex"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
  );
}

export default About;