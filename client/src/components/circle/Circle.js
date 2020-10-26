import React, { useState, useEffect } from "react";
import "./Circle.css";

const Circle = (props) => {
    return (
        <div className="circle-component-container" style={{backgroundImage:`url('${props.bgimg}')`, backgroundPosition: "center", backgroundSize: "cover"}}>
            <div className="circle-content">
                <div className="pad">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.link} target="_blank">{props.linkText}</a>
                </div>
            </div>
        </div>
    )
}

export default Circle;