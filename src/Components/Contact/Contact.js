import React from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact__main">
        <div className="contact__left">
          <Title name="title__contact" heading="Get in touch with us!" />
          <p>We’ll get back to you soon.</p>
          <span>
            Address:&nbsp;
            <h4>
              1905, Cyber One, Plot-4, Sector-30A, Vashi, Navi Mumbai,
              Maharashtra
            </h4>
          </span>
          <span>
            Phone:&nbsp; <h4> +91 8450940705</h4>
          </span>
          <span>
            Email:&nbsp; <h4> support@cubeoneapp.com</h4>
          </span>
        </div>
        <div className="contact__right">
          <form action="">
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Your Mobile Number" />
            <input type="email" placeholder="Your E-mail" />
            <textarea
              name="message"
              cols="50"
              rows="4"
              placeholder="Your message *"
            ></textarea>
            <Button display="button__contact" title="Send Now" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
