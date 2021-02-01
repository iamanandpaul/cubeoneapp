import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./Header.scss";
import LaunchIcon from "@material-ui/icons/Launch";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="oneapp" />
      </div>
      <ul className={click ? "header__main active" : "header__main"}>
        <li className="header__options" onClick={closeMobileMenu}>
          <Link to="/" className="header__links header__home">
            Home
          </Link>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          <Link to="/" className="header__links">
            About
          </Link>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          <Link to="/" className="header__links">
            Features
          </Link>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          <Link to="/" className="header__links">
            Testimonials
          </Link>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          <Link to="/" className="header__links">
            Contact
          </Link>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          <Link to="/" className="header__links">
            Blog
            <LaunchIcon className="header__icons" />
          </Link>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          <Link to="/" className="header__links">
            cubeonebiz
            <LaunchIcon className="header__icons" />
          </Link>
        </li>
      </ul>
      <div className="header__click" onClick={handleClick}>
        {click ? (
          <CloseIcon className="header__clickicon" />
        ) : (
          <MenuOpenIcon className="header__clickicon" />
        )}
      </div>
    </div>
  );
}

export default Header;
