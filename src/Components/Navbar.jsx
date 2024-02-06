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
              to="/cdc.mmmut/"
              className="navbar-logo"
              onClick={closeMoblileMenu}
            >
              <img className="logo_img" src={logo} alt="CDC" /> CDC
            </NavLink>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/cdc.mmmut/"
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
                  to="/cdc.mmmut/event"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Events
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/cdc.mmmut/projects"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Projects
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/cdc.mmmut/team"
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
                  to="/cdc.mmmut/contact"
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
