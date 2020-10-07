import React, { useEffect, useState, useRef } from "react";
import './Overview.css';

const Overview = (props) => {
    return (
        <div className="overview-container">
            <h1 className="overview-title">{props.title}</h1>
            <p className="overview-text">{props.text}</p>
            <p><a className="overview-link-to" href={props.link}>{props.linktext}</a></p>
        </div>
    )
}

export default Overview