import { useState } from "react";
import "./Navbar.css";
import logoOs from "../assets/images/logo.png";
import { useScroll, useTransform, } from "framer-motion";
import { motion } from "framer-motion";

function Navbar() {
  const [navbar, setNavbar] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // framermotion tegs 
  const activeLinkAnimation = {
    color: "#ff4d4d", // Change to your desired active color
    borderBottom: "2px solid #ff4d4d",
    transition: { duration: 0.3 },
  };
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 183, 255, 0)", "rgba(0, 183, 255, 1)"]
  );
  const height = useTransform(scrollY, [0, 100], [60, 60]);

  return (
    <motion.div
      style={{
        background,
        height,
      }}
      className="navbar"
    >
      <img src={logoOs} alt="logoHere" className="logo" />
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <motion.a
            href="#"
            onClick={() => {
              setNavbar("home");
              setIsMenuOpen(false);
              
            }}
            className={navbar === "home" ? activeLinkAnimation :{}}
          >
            Home
          </motion.a>
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
    </motion.div>
  );
}

export default Navbar;