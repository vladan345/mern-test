import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <i className="facebook"></i>
        <i className="linkedin"></i>
        <i className="instagram"></i>
      </div>
      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/vladan345">Vladan345</a>.
      </div>
    </footer>
  );
}
