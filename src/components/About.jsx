import React from "react";
import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles["about-section"]} id="about">
            <h2 className={styles["about-header"]}>About</h2>
            <div className={styles["about-content"]}>
                <img src="/assets/img/3d-boy.svg" />
                <p className={styles["about-description"]}>"A highly motivated and results-driven Front-End Developer striving to create and implement user-friendly, visually appealing responsive websites and web applications. Proficient in HTML, CSS, JavaScript, and frameworks such as React. Strong ability to turn designs into code and collaborate with cross-functional teams to deliver high-quality projects on time. Adept in optimizing website performance, ensuring cross-browser compatibility, and ensuring accessibility standards are met"</p>
            </div>
        </section>
    )
}