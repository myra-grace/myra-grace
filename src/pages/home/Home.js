import React, { useState, useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Overview from "../../components/overview/Overview";
import "./Home.css";

const Home = (props) => {
    return (
        <div className="home-container">
            {/* <Gallery square={square}/> */}
          <div className="landing">
            <Banner
              catch="Web Developer"
              title="Myra-Grace Salinas"
              linktotext="Contact"
              link="https://www.linkedin.com/in/myra-grace-s/"
            />
          </div>
          <div className="overview">
            <Overview
              title="Modern · Simple"
              text="Custom make your website from scratch or start from a template."
              linktext="See Templates"
              link="https://www.linkedin.com/in/myra-grace-s/"
            />
          </div>
        </div>
    )
}

export default Home;