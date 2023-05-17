import React,{ useRef } from "react";
import emailjs from '@emailjs/browser';

import "./contact.css";

function Contact() {
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current,process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
          e.target.reset()
      };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section_title">Contact Me</h2>
        <span className="section_subtitle">Get in touch</span>
        <div className="contact_container container grid">
          <div>
            <div className="contact_information">
              <i className="uil uil-phone contact_icon"></i>
              <div>
                <h3 className="contact_title">Call Me</h3>
                <span className="contact_subtitle">9168284467</span>
              </div>
            </div>
            <div className="contact_information">
              <i className="uil uil-envelope contact_icon"></i>
              <div>
                <h3 className="contact_title">Email</h3>
                <span className="contact_subtitle">komalbhurse3@gmail.com</span>
              </div>
            </div>
            <div className="contact_information">
              <i className="uil uil-map-marker contact_icon"></i>
              <div>
                <h3 className="contact_title">Location</h3>
                <span className="contact_subtitle">Nagpur-Maharashtra</span>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact_form grid">
            <div className="contact_inputs grid">
              <div className="contact_content">
                <label htmlFor="" className="contact_label">
                  Name
                </label>
                <input type="text" name="name" className="contact_input" />
              </div>
              <div className="contact_content">
                <label htmlFor="" className="contact_label">
                  Email
                </label>
                <input type="email" name="email" className="contact_input" />
              </div>
            </div>
            <div className="contact_content">
              <label htmlFor="" className="contact_label">
                Project
              </label>
              <input type="text" name="project" className="contact_input" />
            </div>
            <div className="contact_content">
              <label htmlFor="" className="contact_label">
                Massage
              </label>
              <textarea
                name="massage"
                id=""
                cols="0"
                rows="7"
                className="contact_input"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="button button--flex">
                Send Massage
                <i className="uil uil-message button_icon"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
