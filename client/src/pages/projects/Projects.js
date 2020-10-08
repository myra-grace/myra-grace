import React, { useState, useEffect } from "react";
import Building from "../../components/building/Building";
import Square from "../../components/square/Square";
import "./Projects.css";
import ThreeDeeCasesImage from '../../assets/projects/ThreeDeeCases_desktop.png'
import RoomsWebAppImage from '../../assets/projects/aRoomsWebApp.png'
import MoonRideImage from '../../assets/projects/Moon_Ride_Game.gif'

const Projects = () => {
    let projArr = [
        { title: "ThreeDeeCases", text: "A simple website for a Kickstarter of 3D printed pc cases.", linkText: "Go to website", link: "http://threedeecases.com/", bgimg: ThreeDeeCasesImage },
        { title: "A Rooms Web App", text: "A hangout room to chat, share files, and play games together.", linkText: "See Demo", link: "https://youtu.be/nwlS83uDsVU", bgimg: RoomsWebAppImage },
        { title: "Moon Ride Game", text: "Drive down a never-ending road through the night dodging meteors.", linkText: "Play Game", link: "https://moon-ride-game.web.app/", bgimg: MoonRideImage },
    ];

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="square-container">
            {projArr.map(element => {
                return (
                    <div className="s-container">
                        <Square title={element.title} text={element.text} linkText={element.linkText} link={element.link} bgimg={element.bgimg}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Projects;