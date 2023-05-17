import React, { useEffect, useState } from 'react';
import "./header.css";



function Header(){
    const[theme, setTheme]=useState(false);

    const[value, setValue] = useState(false);
    
    useEffect(()=>{
         document.body.className=theme?"dark-theme":"";
         theme?localStorage.setItem("className","dark-theme"):localStorage.removeItem("className","dark-theme");
    },[theme])

    window.addEventListener("scroll",function(){
        const header =document.querySelector(".header");
        // when the scroll is higher than 80 viewport height, add the scroll-header class to header tag with the header class
        if(this.scrollY >= 80){
            header.classList.add("scroll-header");
        }else{
            header.classList.remove("scroll-header");
        }
    })

    return(
        <>
        
        <header className="header" id="header">
        <nav className="nav container">
        <a href="#home" className="nav-logo">Komal</a>
            <div className={value?"nav-menu show-menu":"nav-menu"} id="nav-menu">
                
                <ul className="nav_list grid">
                    <li className="nav_item">

                    <a onClick={ () =>setValue(!value)} href="#home" className="nav_link active-link">
                            <i className="uil uil-estate nav_icon"></i>Home
                        </a>

                        

                    </li>
                    <li className="nav_item">

                    <a onClick={ () =>setValue(!value)} href="#about" className="nav_link">
                            <i className="uil uil-user nav_icon"></i>About
                        </a>

                       
                        
                    </li>
                    <li className="nav_item">

                    <a onClick={ () =>setValue(!value)} href="#skills" className="nav_link">
                            <i className="uil uil-file-alt nav_icon"></i>Skills
                        </a>

                        
                        
                    </li>
                    <li className="nav_item">

                    <a onClick={ () =>setValue(!value)} href="#qualification" className="nav_link">
                            <i className="uil uil-briefcase-alt nav_icon"></i>Qualification
                        </a>

                    
                        
                    </li>
                    <li className="nav_item">

                    <a onClick={ () =>setValue(!value)} href="#portfolio" className="nav_link">
                            <i className="uil uil-scenery nav_icon"></i>Portfolio
                        </a>

                    
                        
                    </li>
                    <li className="nav_item">

                    <a onClick={ () =>setValue(!value)} href="#contact" className="nav_link">
                            <i className="uil uil-message nav_icon"></i>Contactme
                        </a>

                    
                        
                    </li>
                </ul>
                <i onClick={ () =>setValue(!value)} className="uil uil-times nav_close" id="nav-close"></i>
            </div>
            <div className="nav_btns">
                {/* <!-------------Theme change button-------------> */}
                 <i onClick={()=>setTheme(!theme)} className={theme?"uil uil-sun change-theme":"uil uil-moon change-theme"} id="theme-button" ></i>
                <div onClick={()=>setValue(!value)} className="nav_toggle" id="nav-toggle">
                    <i className="uil uil-apps"></i>
                </div>
            </div>
        </nav>
    </header>
    
    </>
    );
}

export default Header;