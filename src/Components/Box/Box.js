import React from "react";
import "./Box.scss";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Box({ image, title, desc }) {
  return (
    <div className="box">
      {image === "PhoneIphoneIcon" ? (
        <PhoneIphoneIcon className="box__icons" />
      ) : image === "HomeOutlinedIcon" ? (
        <HomeOutlinedIcon className="box__icons" />
      ) : (
        <ShoppingCartOutlinedIcon className="box__icons" />
      )}
      <h5>{title} </h5>
      <p>{desc} </p>
    </div>
  );
}

export default Box;
