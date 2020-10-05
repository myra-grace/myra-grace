import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Icon } from "react-icons-kit";
import { socialGithub } from "react-icons-kit/ionicons/socialGithub";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { email } from "react-icons-kit/ionicons/email";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contacts">
        <a href="https://www.linkedin.com/in/myra-grace-s/">
          <div className="linkedin">
            <Icon size={"70%"} icon={linkedinSquare} />
          </div>
        </a>
        <a href="https://github.com/myra-grace">
          <div className="github">
            <Icon size={"70%"} icon={socialGithub} />
          </div>
        </a>
        {/* <button>
            <Icon size={"100%"} icon={email} />
          </button> */}
      </div>
      <button className="email">myrags3@gmail.com</button>
    </div>
  );
};

export default Footer;
