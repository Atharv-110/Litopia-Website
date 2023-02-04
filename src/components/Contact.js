import React from "react";
import Heading from "./Heading";
import "./Contact.css";
import eventLogo from "../images/star_logo_animate.gif";
// import HorizontalRule from "./HorizontalRule.js";

export default function Contact() {
  return (
    <>
      <div className="contact-div" id="contact">
        {/* <HorizontalRule /> */}
        <Heading text="Any Queries?" main="Contact us" />
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-link">
              <i className="contact-icon bx bxl-whatsapp"></i>
              <div className="contact-link-a">
                <a
                  href="https://api.whatsapp.com/send?phone=8889140648"
                  target="_blank"
                  rel="noreferrer"
                >
                  +91-8889140648
                </a>
              </div>
            </div>
            <div className="contact-link">
              <i className="contact-icon bx bx-envelope"></i>
              <div className="contact-link-a">
                <a
                  href="mailto:thesahityikclub@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  thesahityikclub@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-link">
              <i className="contact-icon bx bxs-map"></i>
              <div className="contact-link-a">
                <a
                  href="https://g.page/medi-caps-university-indore?share"
                  target="_blank"
                  rel="noreferrer"
                >
                  Medi-Caps University
                </a>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <img src={eventLogo} alt="event" />
            <div className="contact-social">
              <a
                href="https://instagram.com/sahityik_mu"
                className="contact-a"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a
                href="mailto: thesahityikclub@gmail.com"
                className="contact-a"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-envelope"></i>
              </a>
              <a
                href="https://discord.gg/JeSjSWSFgf"
                className="contact-a"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-discord-alt"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=8889140648"
                className="contact-a"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
