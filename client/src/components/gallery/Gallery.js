import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { Icon } from "react-icons-kit";
import {chevronLeft} from 'react-icons-kit/feather/chevronLeft'
import {chevronRight} from 'react-icons-kit/feather/chevronRight'

const Gallery = (props) => {
  console.log(props.square);

  useEffect(() => {
    let ps = document.getElementById("projects-container");
    if (ps === null) return;
    ps.style.width = `${props.square}px`;
    ps.style.height = `${props.square}px`;
    console.log(props.square);
  }, [props.square]);

  return (
    <div id="projects-container">
      <button className="back"><Icon icon={chevronLeft}/></button>
      <div className="projects-section">
        <button className="project1">
            {/* try to do the double scroll thing */}
          <p className="title">TITLE</p>
        </button>
        <button className="project2">
          <img />
          <div className="project-text">
              <p>title</p>
              {/* <p>text</p> */}
          </div>
        </button>
      </div>
      <button className="forth"><Icon icon={chevronRight}/></button>
    </div>
  );
};

export default Gallery;
