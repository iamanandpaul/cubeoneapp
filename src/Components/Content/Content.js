import React from "react";
import "./Content.scss";
import utilitybillspayments from "../../assets/core-img/utility-bills-payments.png";
import grocery from "../../assets/core-img/grocery.png";
import orderfood from "../../assets/core-img/order-food.png";
import safety from "../../assets/core-img/safety.png";

function Content({ image, title, desc }) {
  return (
    <div className="content">
      <div className="content__main">
        <img
          src={
            image === "utilitybillspayments"
              ? utilitybillspayments
              : image === "grocery"
              ? grocery
              : image === "orderfood"
              ? orderfood
              : safety
          }
          alt=""
        />
        <h2>{title}</h2>
      </div>
      <p>{desc}</p>
    </div>
  );
}

export default Content;
