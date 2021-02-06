import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo/logo-icon.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="oneapp" />
      <p>Terms & Conditions</p>
      <p>© 2021, Futurescape Technologies Pvt Ltd. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
