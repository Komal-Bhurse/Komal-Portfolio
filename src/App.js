import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/main/about/About";
import Contact from "./components/main/contact/Contact";
import Home from "./components/main/home/Home";
import Portfolio from "./components/main/portfolio/Portfolio";
import ProjectCard from "./components/main/projectCard/ProjectCard";
import Skills from "./components/main/skill/Skills";
import Qualification from "./components/main/qualification/Qualification";


import "./app.css";

function App() {
  
  return (
    <>
  
    <Header/>
    <main className="main">    
    <Home/>
    <About/>
    <Skills/>
    <Qualification/>
    <Portfolio/>
    <ProjectCard/>
    <Contact/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
