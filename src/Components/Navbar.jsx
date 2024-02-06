import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMoblileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: " gray" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <NavLink
              to="/Codersclub.mmmut/"
              className="navbar-logo"
              onClick={closeMoblileMenu}
            >
              <img className="logo_img" src={logo} alt="Codev logo" /> Codev
              Club
            </NavLink>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/codersclub.mmmut/"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/codersclub.mmmut/event"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/codersclub.mmmut/projects"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/codersclub.mmmut/team"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/codersclub.mmmut/contact"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
