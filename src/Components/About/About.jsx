import React from "react";
import  "./About.css"

function About() {
  return (
    <>
      <section id="ABOUT">
        <div className="about">
        <div className="greeting">
          <h2>Hi!...</h2>
          <h2>I am Mohit</h2>
          <h3>A full Stack Web Devloper</h3>
          <h3>Welcome to my Protfolio website.</h3>
        </div>

        {/* basicIntrect */}
        <div className="basicIntrect">
          <h3 className="heading">A Journy of Tech</h3>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hi, everyone My name is Mohit Vishvakarma. I'm form Ujjain. I
            started my coding Journy on 2021 because I was very intrested in
            computer opreting and logic bilding and now also. I am a student of
            B. Tech in Computer Science from RGPV Universite. Now I am working
            on fullStack Web devlopment. I shall complete my B. Tech in 2025.{" "}
          </p>
        </div>

        {/* Educaiton  */}
        <div className="Education">
          <h3 className="heading">Education</h3>
          <span className="infoBlock">
            <h4>Graguation</h4>
            <h5>B. Tech in Computer Science</h5>
            <p>Aug 2021 to jun 2025 </p>
            <p>Grade - 7.2</p>
          </span>
<br />

          <span className="infoBlock">
            <h4>High Secondary School</h4>
            <h5>
              School - Saraswati Vidhya Mandir High Secondary School,
              Marutiganj, Ujjain{" "}
            </h5>
            <p>Jun 2020 to Mar 2021</p>
            <p>Grade - 7.6</p>
          </span>
<br />

          <span className="infoBlock">
            <h4>High School</h4>
            <h5>
              School - Saraswati Vidhya Mandir High Secondary School,
              Marutiganj, Ujjain.
            </h5>
            <p>Jun 2018 to Mar 2019</p>
            <p>Grade - 7.9</p>
          </span>
        </div>
        </div>
        
      </section>
    </>
  );
}

export default About;
