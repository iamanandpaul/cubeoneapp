import React from "react";
import "./Home.scss";
import barcode from "../../assets/core-img/barcode.png";
import Button from "../Button/Button";
import oneapp from "../../assets/bg-img/welcome-img.png";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home__contents">
        <h2>1</h2>
        <h1>oneapp</h1>
        <h4>
          All you need for an <span>aatmanirbhar</span> living
        </h4>
        <img className="home__barcode" src={barcode} alt="barcode" />
        <Fade bottom delay="200">
          <Button display="button__home" title="Download Now" />
        </Fade>
      </div>
      <Fade top delay="200" distance="10vh">
        <img src={oneapp} alt="" />
      </Fade>
    </div>
  );
}

export default Home;
