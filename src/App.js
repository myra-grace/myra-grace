import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Templates from "./pages/templates/Templates";
import About from "./pages/about/About";

function App() {
  const [square, setSquare] = useState(300);
  let vw = window.innerWidth;
  let vh = window.innerHeight;

  // let square = 300;

  useEffect(() => {
    if (vw >= vh) {
      setSquare(vh - 170);
      // square = vh
      console.log("square: ", square);
    } else {
      setSquare(vw);
      // square = vw
      console.log("square: ", square);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <header className="header">
          <Navbar />
        </header>

        <div className="main">
          <Switch>
            <Route exact path="/" render={() => <Home vw={vw} vh={vh} />} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/templates" component={Templates} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>

        <footer className="footer">
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
