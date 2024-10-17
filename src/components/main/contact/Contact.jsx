import React,{ useRef } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import "./contact.css";
import {useFormik} from 'formik'
import * as Yup from 'yup'

const formSchema = Yup.object().shape({
  name: Yup.string().required("Plaese fill your Name"),
  email: Yup.string().required("Plaese fill your Email"),
  project: Yup.string().required("Plaese fill your Project"),
  massage: Yup.string().required("Plaese fill your Message"),
})

function Contact() {

  const formRef = useRef(null)
    const form = useFormik({
      initialValues:{
         name:"",
         email:"",
         project:"",
         massage:""
      },
      validationSchema:formSchema,
      onSubmit: async(values,{resetForm})=>{
           
       const res = await emailjs.sendForm(REACT_APP_EMAILJS_SERVICE_ID,REACT_APP_EMAILJS_TEMPLATE_ID,formRef.current,REACT_APP_EMAILJS_PUBLIC_KEY)
       if(res.status === 200){
          toast.success("Email Sent Succefully")
          resetForm()
       }else{
        toast.error("Sorry..! Email not sent")
       }
       
      }
    })

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
          <form ref={formRef} onSubmit={form.handleSubmit} className="contact_form grid">
            <div className="contact_inputs grid">
              <div>
              <div className="contact_content">
                <label htmlFor="" className="contact_label">
                  Name
                </label>
                <input type="text" name="name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} className="contact_input" />
                
              </div>
              {form.touched && form.errors && <p style={{color:"red"}}>{form.errors.name}</p>}
              </div>
              <div>
              <div className="contact_content">
                <label htmlFor="" className="contact_label">
                  Email
                </label>
                <input type="email" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} className="contact_input" />

              </div>
              {form.touched && form.errors && <p style={{color:"red"}}>{form.errors.email}</p>}

              </div>
            </div>
            <div>
            <div className="contact_content">
              <label htmlFor="" className="contact_label">
                Project
              </label>
              <input type="text" name="project" value={form.values.project} onChange={form.handleChange} onBlur={form.handleBlur} className="contact_input" />

            </div>
            {form.touched && form.errors && <p style={{color:"red"}}>{form.errors.project}</p>}

            </div>
            <div>
            <div className="contact_content">
              <label htmlFor="" className="contact_label">
                Massage
              </label>
              <textarea
                name="massage"
                id=""
                cols="0"
                rows="7"
                value={form.values.massage} onChange={form.handleChange} onBlur={form.handleBlur}
                className="contact_input"
              ></textarea>

            </div>
            {form.touched && form.errors && <p style={{color:"red"}}>{form.errors.massage}</p>}

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
