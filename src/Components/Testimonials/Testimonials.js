import React from "react";
import "./Testimonials.scss";
import Title from "../Title/Title";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <Title heading="Testimonials" />

      <Carousel
        showStatus={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        className="testimonials__carousel"
      >
        <div key="slide1">
          <FormatQuoteIcon className="testimonials__quote" />

          <h1>
            oneapp is the game-changer in the way life, specially at the present
            situation. The app's listings helped a lot in finding and connecting
            with our local shops and stores and get things delivered at home
            since venturing out in this lockdown situation isn't so easy.
          </h1>
          <p>asdfasdfsaf</p>
        </div>
        <div>
          <FormatQuoteIcon className="testimonials__quote" />
          <h1>
            It's easy finding my local shops and connecting with them. oneapp's
            list is pretty elaborate and ordering is easy too.
          </h1>
          <p>asdfasdfsaf</p>
        </div>

        <div>
          <FormatQuoteIcon className="testimonials__quote" />
          <h1>
            As a client of onesociety, oneapp's housing society management
            solution, I can say that this app kept us sailing through this tough
            time. Connecting with members, keeping tab of society's adherence to
            the govt. norms in this Covid 19 situation, and all while
            quarantining at home would not have been possible otherwise.
          </h1>
          <p>asdfasdfsaf</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonials;
