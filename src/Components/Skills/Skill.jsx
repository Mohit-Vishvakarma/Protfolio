import React from 'react'
import "./skill.css";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";



function Skill() {
  return (
    <section id="Skill" >
      <h1>Tech Skill</h1>

      <h2>Frontend</h2>

      <div className="frontend">
        <div className="html">
          <IoLogoHtml5 id="htmlIcon" />
          <h3>HTML 5</h3>
        </div>

        {/* css  */}
        <div className="html">
          <FaCss3Alt id="cssIcon" />
          <h3>CSS 3</h3>
        </div>

        {/* javascript  */}
        <div className="html">
          <TbBrandJavascript id="jsIcon" />
          <h3>JavaScript</h3>
        </div>
      </div>

      <h2>Framworks</h2>
      <div className="framwork">
        {/* Bootstrap  */}
        <div className="html">
          <FaBootstrap id="bootstrapIcon" />
          <h3>Bootstrap</h3>
        </div>

        {/* Tailwind  */}
        <div className="html">
          <SiTailwindcss id="tailwindIcon" />
          <h3>Tailwind CSS</h3>
        </div>
      </div>

      <h2>Programming Languages & Librarys</h2>
      <div className="language">
        {/* React.js  */}
        <div className="html">
          <IoLogoReact id="reactIcon" />
          <h3>React.js</h3>
        </div>

        {/* Java  */}
        <div className="html">
          <FaJava id="javaIcon" />
          <h3>Java</h3>
        </div>
      </div>
    </section>
  );
}

export default Skill;
