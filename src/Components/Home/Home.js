import React from "react";
import "./Home.scss";
import barcode from "../../assets/core-img/barcode.png";
import Button from "../Button/Button";
import oneapp from "../../assets/bg-img/welcome-img.png";

function Home() {
  return (
    <div className="home">
      <div className="home__contents">
        <h2>1</h2>
        <h1>oneapp</h1>
        <h4>
          All you need for an <span>aatmanirbhar</span> living
        </h4>
        <img className="home__barcode" src={barcode} alt="barcode" />
        <Button display="button__home" title="Download Now" />
      </div>
      <img src={oneapp} alt="" />
    </div>
  );
}

export default Home;
