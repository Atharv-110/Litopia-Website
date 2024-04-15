import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-layer">
          <h3>
            COPYRIGHT &#169; 2023 ALL RIGHTS RESERVED | TEAM SAHITYIK{" "}
            <i className="heart bx bxs-heart"></i>
          </h3>
          <p className="credits">
            Designed & Developed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Atharv-110"
            >
              Atharv
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
