import React, { useEffect, useState, useRef } from "react";
import Banner from "../../components/banner/Banner";
import Overview from "../../components/overview/Overview";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-container">
      <div id="banner-about">
        <Banner
          catch="Web Developer"
          title="Myra-Grace Salinas"
          linktotext="Contact"
          link="https://www.linkedin.com/in/myra-grace-s/"
        />
      </div>
      <Overview
        title="Modern · Simple"
        text="Custom make your website from scratch or start from a template."
        linktext="See Templates"
        link="https://www.linkedin.com/in/myra-grace-s/"
      />
    </div>
  );
};

export default About;
