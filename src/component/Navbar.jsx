import { useState } from "react";
import "./Navbar.css";
import logoOs from "../assets/images/logo.png";

function Navbar() {
  const [navbar, setNavbar] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    
    <img src={logoOs} alt="logoHere" className="logo" />
    <div className="navbar">
      
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a
            href="#"
            onClick={() => {
              setNavbar("home");
              setIsMenuOpen(false);
            }}
            className={navbar === "home" ? "active" : ""}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              setNavbar("Service");
              setIsMenuOpen(false);
            }}
            className={navbar === "Service" ? "active" : ""}
          >
            Service
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              setNavbar("Product");
              setIsMenuOpen(false);
            }}
            className={navbar === "Product" ? "active" : ""}
          >
            Product
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              setNavbar("About");
              setIsMenuOpen(false);
            }}
            className={navbar === "About" ? "active" : ""}
          >
            About
          </a>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Navbar;
