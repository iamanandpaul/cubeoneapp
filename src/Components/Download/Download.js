import React from "react";
import "./Download.scss";
import Button from "../../Components/Button/Button";
import Fade from "react-reveal/Fade";

function Download() {
  return (
    <div className="download">
      <div className="download__body">
        <div className="download__content">
          <h1>
            Download <em>oneapp</em> Now!
          </h1>
          <p>Find the perfect solution for your daily needs</p>
        </div>
        <div className="download__buttons">
          <Fade bottom delay="400" distance="2vh">
            <Button
              display="button__download"
              img="AndroidIcon"
              title="download on the"
              app="Google Store"
            />{" "}
          </Fade>
          <Fade top delay="400" distance="2vh">
            <Button
              display="button__download"
              img="AppleIcon"
              title="download on the"
              app="Apple Store"
            />{" "}
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Download;
