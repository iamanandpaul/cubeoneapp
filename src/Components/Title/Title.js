import React from "react";
import "./Title.scss";

function Title({ name, heading }) {
  return (
    <div className={name === "title__contact" ? "title__contact" : "title"}>
      <h1 className="title__heading">{heading}</h1>
      <div className="about__line"></div>
    </div>
  );
}

export default Title;
