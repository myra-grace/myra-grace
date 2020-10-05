import React, {useState, useEffect} from "react";
import "./App.css";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Overview from "./components/overview/Overview";

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
        <Navbar />
      </header>
      
      <div className="main">
        {/* <Gallery square={square}/> */}
        <div className="landing">
          <Banner catch="Web Developer" title="Myra-Grace Salinas" linktotext="Contact" link="https://www.linkedin.com/in/myra-grace-s/"/>
        </div>
        <div className="overview">
          <Overview />
        </div>
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
