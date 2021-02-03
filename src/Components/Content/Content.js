import React from "react";
import "./Content.scss";
import utilitybillspayments from "../../assets/core-img/utility-bills-payments.png";
import grocery from "../../assets/core-img/grocery.png";
import orderfood from "../../assets/core-img/order-food.png";
import safety from "../../assets/core-img/safety.png";
import onlinebusiness from "../../assets/core-img/online-business.png";
import pointofsale from "../../assets/core-img/point-of-sale.png";
import socialdistance from "../../assets/core-img/social-distance.png";
import customerrelationship from "../../assets/core-img/customer-relationship.png";

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
              : image === "safety"
              ? safety
              : image === "onlinebusiness"
              ? onlinebusiness
              : image === "pointofsale"
              ? pointofsale
              : image === "socialdistance"
              ? socialdistance
              : customerrelationship
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
