import React, { useState, useEffect } from "react";
import "./Square.css";

const Square = (props) => {
    return (
        <div className="square-component-container" style={{backgroundImage:`url('${props.bgimg}')`, backgroundPosition: "center", backgroundSize: "cover"}}>
            <div className="square-content">
                <div className="pad">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.link}>{props.linkText}</a>
                </div>
            </div>
        </div>
    )
}

export default Square;