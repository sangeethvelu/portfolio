import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles["projects-section"]}>
      <h2 className={styles["project-header"]}>Projects</h2>
      <div className={styles["projects-container"]}>
        <div className={styles["project-card"]}>
          <img
            src="/assets/img/quizzical.jpg"
            alt="Image of Quizzical app"
            className={styles["project-img"]}
          />
          <p className={styles["project-title"]}>Quizzical</p>
          <p className={styles["project-description"]}>
            A Quiz app with simple and intuitive navigation for users who can
            easily select the quiz of their choice and start answering
            questions.
          </p>
          <div className={styles["btn-container"]}>
            <a href="https://github.com/sangeethvelu/quiziccal" target="_blank">
              GitHub
            </a>
            <a href="https://quiziccal-game.netlify.app/" target="_blank">
              Website
            </a>
          </div>
        </div>
        <div className={styles["project-card"]}>
          <img
            src="/assets/img/cinemawiki.jpg"
            alt="Image of Quizzical app"
            className={styles["project-img"]}
          />
          <p className={styles["project-title"]}>Cinema Wiki</p>
          <p className={styles["project-description"]}>
            This website provides detailed information on thousands of films
            where users can search for movies by title, director, genre, and
            release date
          </p>
          <div className={styles["btn-container"]}>
            <a href="https://www.github.com" target="_blank">
              GitHub
            </a>
            <a href="https://www.github.com" target="_blank">
              Website
            </a>
          </div>
        </div>
        <div className={styles["project-card"]}>
          <img
            src="/assets/img/ipaddresstracker.jpg"
            alt="Image of Quizzical app"
            className={styles["project-img"]}
          />
          <p className={styles["project-title"]}>IP Address Tracker</p>
          <p className={styles["project-description"]}>
            This web app provides real-time information on the location of any
            IP address, including the country, region, city, timezone, and ISP.
          </p>
          <div className={styles["btn-container"]}>
            <a href="https://www.github.com" target="_blank">
              GitHub
            </a>
            <a href="https://www.github.com" target="_blank">
              Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
