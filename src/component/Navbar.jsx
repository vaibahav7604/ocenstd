import { useState } from "react";
import "./Navbar.css";
import logoOs from "../assets/images/OSLogo.png";
import { AnimatePresence, useScroll, useTransform, } from "framer-motion";
import { motion } from "framer-motion";

function Navbar() {
  const [navbar, setNavbar] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // framer motion 
  const { scrollY } = useScroll();
  
  const height = useTransform(scrollY, [0, 100], [60, 60]);

  return (
    <motion.div
      style={{
        height,
      }}
      className="navbar"
    >
      <img src={logoOs} alt="logoHere" className="logo" />
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
      <AnimatePresence>
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
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;