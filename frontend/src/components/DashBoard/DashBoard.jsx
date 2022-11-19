import React from "react";
import "./DashBoard.css";
import headerImage from "./images/header.png";
import bgImg from "./images/bg.png"
import demoVideo from "./demo.mp4";

import page1bg from "./images/page1bg.jpg";
import page2bg from "./images/page2bg.png";
import page3bg from "./images/page3bg.jpg";

import pageImage1 from "./images/page1Image.png";
import pageImage2 from "./images/page2Image.png";
import pageImage3 from "./images/page3Image.png";
import videoBgImage from "./images/videobg.jpg";

import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <main className="dashboard-main">
        <DashBoardInfo bgImage={bgImg} title="Resume Builder for All" desc={["A Web app built using react for frontend & redux for state management,", "to help Students/Professionals create resumes within no time"]} image={headerImage} />
        <DashBoardVideo />
        <DashBoardInfo bgImage={page1bg} align="right" title="Interactive and Easy User-Interface" desc={["The interactive user-interface (UI) takes inputs from the user", "and shows the result on the template and also stores it on Local Storage,","so that user does not have to enter the details again and again for new templates."]} image={pageImage1} />
        <DashBoardInfo bgImage={page2bg} align="left" title="Effective State Management" desc={["Redux is used for state management and provide the required", "data to a library called JSPDF which converts HTML template into PDF."]} image={pageImage2} />
        <DashBoardInfo bgImage={page3bg} align="right" title="Highly Scalable Application" desc={["New templates can be easily added in the application", "by developing a html version of the resume template"]} image={pageImage3} />
      <footer>
        <span>Created by Prasanna Gramopadhye</span>
        <span className="footer-horizontal-bar">|</span>
        <a href="https://github.com/gramo37">Github</a>
        <span className="footer-horizontal-bar">|</span>
        <a href="https://www.linkedin.com/in/prasanna-gramopadhye-1791701b9/">LinkedIn</a>
        <span className="footer-horizontal-bar">|</span>
        <a href="https://twitter.com/gramopadhye37">Twitter</a>
      </footer>
      </main>
    </div>
  );
};

const DashBoardInfo = ({ bgImage, title, desc, image, align }) => {
  return (
    
    // <header className="dashboard-header">
    <header style={{ backgroundImage: `url(${bgImage})` }} className="dashboard-header">
      <div className="dashboard-overlay"></div>
      <div className="dashboard-header-container" style={{ flexDirection: `${align == "left" ? "row-reverse" : "row"}` }}>
        <div className={`dashboard-header-image`}>
          <img className="showHeaderContent" src={image} alt="Header-Image" />
          {/* <video src={image}></video> */}
        </div>
        <div className="showHeaderContent dashboard-header-content">
          <h1>{title}</h1>
          {desc?.map((item) => {
            return (<p>{item}</p>)
          })}
          <div className="loginToProject">
            <Link to="/create-resume"> Check Out Now !</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
const DashBoardVideo = () => {
  return (
    // <section className="dashboard-demo-video">
    <section style={{ backgroundImage: `url(${videoBgImage})` }} className="dashboard-demo-video">
      {/* <div className="dashboard-overlay"></div> */}
      <video width="100vw" height="100vh" autoPlay loop muted >
        <source src={demoVideo} type="video/mp4" />
      </video>
    </section>
  )
}

export default DashBoard;
