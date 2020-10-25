import React, { useState, useEffect } from "react";
import Building from "../../components/building/Building";
import Square from "../../components/circle/Circle";
import "./Projects.css";
import ThreeDeeCasesImage from '../../assets/projects/ThreeDeeCases_desktop.png'
import nsSite from '../../assets/projects/noodle_ship_site.jpg'
import RoomsWebAppImage from '../../assets/projects/aRoomsWebApp.png'
import MoonRideImage from '../../assets/projects/Moon_Ride_Game.gif'
import Circle from "../../components/circle/Circle";

const Projects = () => {
    let websitesArr = [
        { title: "ThreeDeeCases", text: "A simple website for a Kickstarter of 3D printed pc cases.", linkText: "Go to website", link: "http://threedeecases.com/", bgimg: ThreeDeeCasesImage },
        { title: "noodle_ship", text: "A website for the noodle_ship YouTube channel.", linkText: "Visit Website", link: "https://noodleship.netlify.app/", bgimg: nsSite },
    ];

    let webAppsArr = [
        { title: "A Rooms Web App", text: "A hangout room to chat, share files, and play games together.", linkText: "See Demo", link: "https://youtu.be/nwlS83uDsVU", bgimg: RoomsWebAppImage },
        { title: "Moon Ride Game", text: "Drive down a never-ending road through the night dodging meteors.", linkText: "Play Game", link: "https://moon-ride-game.web.app/", bgimg: MoonRideImage },
    ];

    return (
        <div className="projects-container">
            <h1>Websites</h1>
            <div className="circle-container">
            {websitesArr.map(element => {
                return (
                    <div className="c-container">
                        <Circle title={element.title} text={element.text} linkText={element.linkText} link={element.link} bgimg={element.bgimg}/>
                    </div>
                )
            })}
            </div>
            <h1>Web Apps</h1>
            <div className="circle-container">
            {webAppsArr.map(element => {
                return (
                    <div className="c-container">
                        <Circle title={element.title} text={element.text} linkText={element.linkText} link={element.link} bgimg={element.bgimg}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Projects;