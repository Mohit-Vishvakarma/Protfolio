import React from 'react'
import "./contact.css";
import SideImg from "./SideImg.png"

const Contact = () => {
  return (
    <>
      <section id="Contact">
        <div className="contactContainer">
        <div className="contactHeading">
            <h1>Get touch me</h1>
            <hr />
        </div>

        <form action="https://api.web3forms.com/submit" method="POST" className= "contactFormLeft">
        <input type="hidden" name="access_key" value="6ae49fa0-4645-4886-84b1-47a9e60ae57b"/>
            <input type="text" name="name" placeholder="Enter your name" className="contact-inputs" required/>
            <input type="text" name="email" placeholder="Enter your Email" className="contact-inputs" required/>
            <input type="text" name="Mobile" placeholder="Enter your phone" className="contact-inputs" required/>
            <textarea name="Message" placeholder="Write your message." className="contact-inputs disc" required></textarea>
            <div className="btn">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
            </div>
        </form>
        </div>

        <div className="contactFormRight">
            <img src={SideImg} alt="" />
        </div>

      </section>
    </>
  );
};

export default Contact;
