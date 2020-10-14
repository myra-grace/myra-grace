import React, { useState, useEffect } from "react";
import Banner from "../../../components/banner/Banner";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import Overview from "../../../components/overview/Overview";
import "./Template1.css";

const Template1 = (props) => {
  let preScroll = window.pageYOffset;

  window.onscroll = () => {
    let scroll = window.pageYOffset;
    if (preScroll > scroll) {
      document.querySelector("header").style.top = "0";
    } else {
      document.querySelector("header").style.top = "-500px";
    }
    preScroll = scroll
  }

  return (
    <div className="temp1-container">
      <header className="temp1-header">
        <Navbar />
      </header>
      <div className="temp1-main">
        <div className="temp1-landing">
          <Banner
            catch="Template 1"
            title="Bokeh"
            linktotext="Contact"
            link="/"
          />
        </div>
        <div className="overview">
          <Overview
            title="Modern · Simple"
            text="Custom make your website from scratch or start from a template."
            linktext="See Templates"
            link="/templates"
          />
        </div>
        <div className="responsive">
          <Banner
            catch=" "
            title="Responsive Design"
            linktotext=" "
            link="https://www.linkedin.com/in/myra-grace-s/"
          />
        </div>
        <div className="overview">
          <Overview
            title="All Devices"
            text="Look good on desktop, tablet, and mobile."
            linktext="See Projects"
            link="/projects"
          />
        </div>
      </div>
      <footer className="temp1-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Template1;
