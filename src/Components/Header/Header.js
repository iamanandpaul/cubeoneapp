import React, { useState } from "react";
import logo from "../../assets/logo/logo.png";
import "./Header.scss";
import LaunchIcon from "@material-ui/icons/Launch";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import CloseIcon from "@material-ui/icons/Close";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <div className="header__logo">
        <a href="/" className="header__links header__home">
          <img src={logo} alt="oneapp" />
        </a>
      </div>
      <ul className={click ? "header__main active" : "header__main"}>
        <li className="header__options" onClick={closeMobileMenu}>
          <HashLink smooth to="/#home" className="header__links header__home">
            Home
          </HashLink>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          <HashLink
            scroll={(el) => scrollWithOffset(el, 75)}
            to="/#about"
            className="header__links"
          >
            About
          </HashLink>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          <HashLink
            scroll={(el) => scrollWithOffset(el, 75)}
            to="/#features"
            className="header__links"
          >
            Features
          </HashLink>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          <HashLink
            scroll={(el) => scrollWithOffset(el, 75)}
            to="/#testimonials"
            className="header__links"
          >
            Testimonials
          </HashLink>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          <HashLink
            scroll={(el) => scrollWithOffset(el, 75)}
            to="/#contact"
            className="header__links"
          >
            Contact
          </HashLink>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          <HashLink to="/" className="header__links">
            Blog
            <LaunchIcon className="header__icons" />
          </HashLink>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          <HashLink to="/" className="header__links">
            cubeonebiz
            <LaunchIcon className="header__icons" />
          </HashLink>
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
