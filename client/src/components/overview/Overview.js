import React, { useEffect, useState, useRef } from "react";
import './Overview.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
    useHistory,
  } from "react-router-dom";

const Overview = (props) => {
    return (
        <div className="overview-container">
            <h1 className="overview-title">{props.title}</h1>
            <p className="overview-text">{props.text}</p>
            <p><Link className="overview-link-to" to={props.link}>{props.linktext}</Link></p>
        </div>
    )
}

export default Overview