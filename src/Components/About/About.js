import React from "react";
import "./About.scss";
import Box from "../Box/Box";

function About() {
  return (
    <div className="about">
      <h1>Why is it special?</h1>
      <div className="about__line"></div>
      <div className="about__box">
        <Box
          image="PhoneIphoneIcon"
          title="Because it’s the one app for all your daily needs"
          desc="Online
        shopping of groceries and daily essentials, paying society bills,
        ordering food, and many more - all your requirements for a comfortable
        living in this pandemic and beyond can now be managed from a single
        mobile app."
        />
        <Box
          image="HomeOutlinedIcon"
          title="Because it connects you to your neighborhood though being home"
          desc="Find your neighborhood stores and businesses, connect with them, and get serviced while staying safe at your home. Stay in contact with only oneapp to stay connected with your locality in this Covid-19 situation."
        />
        <Box
          image="ShoppingCartOutlinedIcon"
          title="Because it empowers you and your community to be self-sufficient
          "
          desc="This pandemic taught us the importance of being self-sufficient as a community. Shop local and patronize your local businesses without compromising on the comfort of online services. Let’s overcome this situation together."
        />
      </div>
    </div>
  );
}

export default About;
