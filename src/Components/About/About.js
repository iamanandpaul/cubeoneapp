import React from "react";
import "./About.scss";
import Box from "../Box/Box";
import Title from "../Title/Title";
import aboutimage from "../../assets/bg-img/about.png";
import Button from "../Button/Button";

function About() {
  return (
    <div className="about">
      <div className="about__first">
        <Title heading="Why is it special?" />
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
      <div className="about__second">
        <div className="about__main">
          <img src={aboutimage} alt="About" />
          <div className="about__secondcontents">
            <h1>Our best offer for your comfort!</h1>
            <p>
              The world has changed. And it’s time to change your way of living
              and doing business. Make <em>oneapp</em> your trusted partner and
              be
              <em> aatmanirbhar</em> in this new way of the world. Try it, to
              believe it. Download <em>oneapp</em> now!
            </p>
            <div className="about__buttons">
              <Button
                display="button__about"
                img="AndroidIcon"
                title="download on the"
                app="Google Store"
              />
              <Button
                display="button__about"
                img="AppleIcon"
                title="download on the"
                app="Apple Store"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
