import React from "react";
import "./Button.scss";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";

function Button({ img, title, display, app }) {
  return (
    <button className={display}>
      {img === "AndroidIcon" ? (
        <AndroidIcon className="button__icons" />
      ) : img === "AppleIcon" ? (
        <AppleIcon className="button__icons" />
      ) : null}
      <div>
        <h6>{title}</h6>
        <h5>{app}</h5>
      </div>
    </button>
  );
}

export default Button;
