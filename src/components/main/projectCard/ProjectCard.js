import React from 'react'
import "./projectCard.css";
import project from "./Na_Dec_16.jpg";

function ProjectCard() {
  return (
    <>
    <section className="project section">
            <div className="project_bg">
                <div className="project_container container grid">
                    <div className="project_data">
                        <h2 className="project_title">You have a new project</h2>
                        <p className="project_description">Contact me and get a 100% discount on your new project.</p>
                        <a href="#contact" className="button button--flex button--white">
                            Contact Me
                            <i className="uil uil-message project_icon button_icon"></i>
                        </a>
                    </div>
                    <img src={project} alt="" className="project_img"/>
                </div>
            </div>
        </section>
        </>
  );
}

export default ProjectCard;