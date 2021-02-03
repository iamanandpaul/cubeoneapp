import React from "react";
import "./Title.scss";

function Title({ heading }) {
  return (
    <div className="title">
      <h1 className="title__heading">{heading}</h1>
      <div className="about__line"></div>
    </div>
  );
}

export default Title;
