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
                    <li>- TBD</li>
                    <li>- TBD</li>
                    <li>- TBD</li>
                    <li>- TBD</li>
                </ul>
            </div>
        </section>
    )
}
