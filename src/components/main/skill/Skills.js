import React, { useState } from "react";
import "./skills.css";

function Skills() {
    const[skill_1,setSkill_1]=useState(true);
    const[skill_2,setSkill_2]=useState(true);

  return (
    <>
    <section className="skills section" id="skills">
    <h2 className="section_title">Skills</h2>
    <span className="section_subtitle">My technical level</span>
    <div className="skills_container container grid">
        
            {/* <!-----------------skills 1------------------> */}
            <div className={skill_1?"skills_content skills_open":"skills_content skills_close"}>
                <div className="skills_header">
                    <i className="uil uil-brackets-curly skills_icon"></i>
                    <div>
                        <h1 className="skills_title">Frontend devoloper</h1>
                        <span className="skills_subtitle">More than 1 years</span>
                    </div>
                    <i onClick={()=>{setSkill_1(!skill_1)}} className="uil uil-angle-down skills_arrow"></i>
                </div>
                <div className="skills_list grid">
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">HTML</h3>
                            <span className="skills_number">90%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_html"></span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">CSS</h3>
                            <span className="skills_number">80%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_css"></span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">JavaScript</h3>
                            <span className="skills_number">70%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_js"></span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">React Js</h3>
                            <span className="skills_number">90%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_react"></span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">Redux-Toolkit</h3>
                            <span className="skills_number">80%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_redux"></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-----------------skills 2------------------> */}
            <div className={skill_2?"skills_content skills_open":"skills_content skills_close"}>
                <div className="skills_header">
                <i className="uil uil-server-network skills_icon"></i>
                    <div>
                        <h1 className="skills_title">Backend devoloper</h1>
                        <span className="skills_subtitle">More than 6 month</span>
                    </div>
                    <i onClick={()=>{setSkill_2(!skill_2)}} className="uil uil-angle-down skills_arrow"></i>
                </div>
                <div className="skills_list grid">
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">Node js</h3>
                            <span className="skills_number">90%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_node"></span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">Express Js</h3>
                            <span className="skills_number">70%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_express"></span>
                        </div>
                    </div>
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">MongoDB</h3>
                            <span className="skills_number">70%</span>
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage skills_mongodb"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Skills;