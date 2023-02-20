import React from "react";
import styles from "./Navbar.module.css";
import { HashLink } from "react-router-hash-link";
import resume from "/assets/documents/resume.pdf";

function Navbar() {
  const [hide, setHide] = React.useState(true);

  function showMobileNav() {
    setHide((prevState) => !prevState);
  }

  return (
    <>
      <button
        className={`${styles["mobile-nav-toggle"]} ${
          styles[hide ? "" : "show-img"]
        }`}
        aria-label="Navigation Bar"
        onClick={showMobileNav}
      ></button>
      <nav className={`${styles["nav-section"]}`}>
        <div className={styles["nav-details"]}>
          <img
            src="/assets/img/sangeeth.jpg"
            className={styles["nav-img"]}
            alt="Image of Sangeeth"
            width="50"
            height="45"
          />
          <p className={styles["nav-name"]}>Sangeeth Velusamy</p>
        </div>
        <div className={`${styles["nav-info"]} ${styles[hide ? "hide" : ""]}`}>
          <a href={resume} target="_blank">
            Resume
          </a>
          <HashLink to="/#about">About</HashLink>
          <HashLink to="/#contact">Contact</HashLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
