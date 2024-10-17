import React from 'react';
import "./footer.css";

function Footer() {
    window.addEventListener("scroll",function(){
       const scrollUp= this.document.querySelector(".scrollup");
    //    when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scrollUp class
       if(this.scrollY >= 560){
        scrollUp.classList.add("show-scroll");
       }else{
        scrollUp.classList.remove("show-scroll");
       }

    })

  return (
    <>
    <footer className="footer">
        <div className="footer_bg">
            <div className="footer_container container grid">
                <div>
                    <h1 className="footer_title">Komal</h1>
                    <span className="footer_subtitle">MERN Stack devoloper</span>
                </div>
                <ul className="footer_links">
                    
                    <li>
                        <a href="#portfolio" className="footer_link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer_link">Contactme</a>
                    </li>
                </ul>
                <div className="footer_socials">

                    <a href="https://www.linkedin.com/in/komal-bhurse-510776225/" target="_blank" rel="noreferrer"  className="footer_social">
                    <i className="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://www.instagram.com/komal_bhurse_30/" target="_blank" rel="noreferrer" className="footer_social">
                        <i className="uil uil-instagram"></i>
                    </a>

                    <a href="https://github.com/Komal-Bhurse" target="_blank" rel="noreferrer" className="footer_social">
                    <i className="uil uil-github-alt"></i>
                    </a>
                    
                </div>
            </div>
            <p className="footer_copy">&#169; All right reserved</p>
        </div>
    </footer>
    {/* <!---------------------SCROLL TOP--------------------> */}

    <a href="#home" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
    
    
    </>
  );
}

export default Footer;