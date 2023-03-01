import React from "react";
import styles from "./Experience.module.css"

export default function Experience() {
    return (
        <section className={styles["experience-section"]}>
            <h2 className={styles["experience-header"]}>Experience</h2>
            <div className={styles["experience-container"]}>
                <h3 className={styles["experience-subheader"]}>Tata Consultancy Services</h3>
                <p className={styles["experience-designation"]}>Systems Engineer</p>
                <p>September 2020 - September 2022</p>
                <p className={styles["experience-location"]}>Chennai, Tamilnadu</p>
                <ul>
                    <li>- Created and managed the documentation page for client website using HTML, CSS and JavaScript.</li>
                    <li>- Optimized website performance by implementing best practices for loading times, and browser compatibility.</li>
                    <li>- Worked with version control systems such as Git and GitHub to manage code versions, facilitate collaboration, and streamline development processes.</li>
                </ul>
            </div>
        </section>
    )
}
