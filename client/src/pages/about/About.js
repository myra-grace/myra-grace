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
      <div>
        <h1>About</h1>
        <div className="about-text">
          <p>Hey there!</p>
          <p>
            I’m a full-stack developer interested in helping businesses leverage
            the power of the digital world. Coming from an applied human
            sciences background, I intend to weave knowledge from human sciences
            with computer sciences. As technology becomes a part of every aspect
            of life, I want to help you harness the power of modern technology.
          </p>
          <p>
            <b>Technologies: </b>React, Redux, JavaScript, TypeScript, HTML, CSS, Git,
            GitHub, Firebase, Node.js, Express, MongoDB, Shopify
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
