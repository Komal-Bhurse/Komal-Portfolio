import React from 'react';
import "./qualification.css";

function Qualification() {
  return (
    <>
    <section className="qualif+ication section" id='qualification'>
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personal journey</span>
            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className="qualification_button button--flex qualification_active">
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>
                </div>
                <div className="qualification_sections">
                    
                        {/* <!--qualification 1--> */}
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Computer Science Engineering</h3>
                                <span className="qualification_subtitle">RTMN - University</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        {/* <!--qualification 2--> */}
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">HSE</h3>
                                <span className="qualification_subtitle">Maharashtra state board</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017
                                </div>
                            </div>
                        </div>
                        {/* <!--qualification 3--> */}
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">SSC</h3>
                                <span className="qualification_subtitle">Maharashtra state board</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2015
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                            </div>
                        </div>
                    
                </div>
            </div>
        </section>
        </>
  );
}

export default Qualification;