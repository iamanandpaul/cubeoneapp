import React from "react";
import "./Button.scss";

function Button({ title, display }) {
  return <button className={display}>{title}</button>;
}

export default Button;
