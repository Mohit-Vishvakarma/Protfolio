import React from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <>
      <nav className="navbar">
        {/* 1st Part -----> Logo  */}
        <div className="logo">
          <h2>
            <span>M</span>ohit
            <span>V</span>ishvakarma
          </h2>
        </div>

        <div className="mainMenu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
          <ul>
            <li>
{/*               <a href="#">About</a> */}
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Skills</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="menuIcon">
            <a href="#">
              <RxHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
