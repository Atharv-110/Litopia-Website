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
            Developed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Atharv-110"
            >
              Atharv
            </a>
          </p>
          <p className="credits">
            Designed by{" "}
            <a target="_blank" rel="noreferrer" href="https://github.com/Aadarsh-Mourya">
              Aadarsh
            </a>{" "}
            <a target="_blank" rel="noreferrer" href="https://github.com/Pyra06">
              Aniruddha
            </a>{" "}
            <a target="_blank" rel="noreferrer" href="https://github.com/AryaaSharma">
              Aryaa
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
