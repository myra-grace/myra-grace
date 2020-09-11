import React, {useState, useEffect} from "react";
import "./App.css";
import { Icon } from "react-icons-kit";
import {socialGithub} from 'react-icons-kit/ionicons/socialGithub'
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { email } from "react-icons-kit/ionicons/email";
import Gallery from "./components/gallery/Gallery";

function App() {
  const [square, setSquare] = useState(300);
  let vw = window.innerWidth;
  let vh = window.innerHeight;

  // let square = 300;

  useEffect(() => {
    if (vw >= vh) {
      setSquare(vh - 170)
      // square = vh
      console.log('square: ', square);
    } else {
      setSquare(vw)
      // square = vw
      console.log('square: ', square);
    }
  }, []);


  return (
    <div className="App">
      <header className="header">
        <h1 className="name">Myra-Grace Salinas</h1>
        <h2 className="title">Full-Stack Developer</h2>
      </header>
      
      <div className="main">
        <Gallery square={square}/>
      </div>

      <footer className="footer">
        <div className="contacts">
          <a href="https://www.linkedin.com/in/myra-grace-s/">
            <div className="linkedin">
              <Icon size={"70%"} icon={linkedinSquare} />
            </div>
          </a>
          <a href="https://github.com/myra-grace">
            <div className="github">
              <Icon size={"70%"} icon={socialGithub} />
            </div>
          </a>
          {/* <button>
            <Icon size={"100%"} icon={email} />
          </button> */}
        </div>
        <button className="email">myrags3@gmail.com</button>
      </footer>
    </div>
  );
}

export default App;
