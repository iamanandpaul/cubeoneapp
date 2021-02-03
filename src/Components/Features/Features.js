import React from "react";
import "./Features.scss";
import Title from "../Title/Title";
import features from "../../assets/core-img/about_img.png";
import Content from "../Content/Content";
import features2 from "../../assets/core-img/about_img_2.png";

function Features() {
  return (
    <div className="features">
      <div className="features__section">
        <Title heading="What’s in there for you ?" />
        <div className="features__main">
          <div className="features__contents">
            <Content
              image="utilitybillspayments"
              title="Pay society bills online"
              desc="Pay your society’s maintenance and other bills online. Also, receive society notices and circular, escalate issues, and connect with neighbors easily through oneapp."
            />
            <Content
              image="grocery"
              title="Order groceries and essentials online"
              desc="Find your local stores, order groceries, medicines, dairy & many more, and get them delivered at your doorstep. With oneapp, you don’t have to compromise with your and your family’s safety in this Covid-19 situation."
            />
            <Content
              image="orderfood"
              title="Order from restaurants and tiffin services"
              desc="Find restaurants and tiffin services providing in your area in this pandemic, order food online, and get served without stepping out from your home."
            />
            <Content
              image="safety"
              title="Maintain home security & Track visitors"
              desc="Maintain the safety and security of your home by tracking visitors visiting your home and the society premises. Access your visitor log anytime you want right from your mobile phone."
            />
          </div>
          <img src={features} alt="features" />
        </div>
      </div>
      <div className="features__section">
        <Title heading="What’s in there for your business ?" />
        <div className="features__main">
          <img src={features2} alt="features" />
          <div className="features__contents">
            <Content
              image="utilitybillspayments"
              title="Get trained and take your business online"
              desc="Doing business online is the need for this Covid-19 situation. Don’t stay back. Take your business online easily with oneapp and our expert training support."
            />
            <Content
              image="grocery"
              title="Increase your reach"
              desc="Don’t let this pandemic hamper your business. Get listed in oneapp and open your door to the customers seeking online services. Reach your customers in your neighborhood and beyond."
            />
            <Content
              image="orderfood"
              title="Manage business maintaining social distance"
              desc="Adhere to social distancing without affecting your business. Receive orders online and serve customers with deliveries & scheduled pick-ups. Avoid crowding in front of the store to maintain your and your customers’ health."
            />
            <Content
              image="safety"
              title="Serve more customers"
              desc="No crowd allowed in front of the store due to lockdown? Doesn’t have to necessarily mean reduced business. Serve your customers online. Receive order in your mobile phone and schedule delivery or pickup as per convenience maintaining the new norms of the society."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
