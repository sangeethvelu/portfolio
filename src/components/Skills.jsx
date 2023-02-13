import React from "react";
import styles from "./Skills.module.css";

export default function Skills() {
    return (
        <section className={styles["skills-section"]}>
            <h2 className={styles["skills-header"]}>Skills</h2>
            <div className={styles["skills-container"]}>
                <div className={styles["skills-box"]}>
                    <img src="/assets/icons/html.svg" alt="HTML Icon"/>
                    <p className={styles["skills-description"]}>HTML5</p>
                </div>
                <div className={styles["skills-box"]}>
                    <img src="/assets/icons/css.svg" alt="CSS Icon"/>
                    <p className={styles["skills-description"]}>CSS3</p>
                </div>
                <div className={styles["skills-box"]}>
                    <img src="/assets/icons/javascript.svg" alt="Javascript Icon"/>
                    <p className={styles["skills-description"]}>JavaScript</p>
                </div>
                <div className={styles["skills-box"]}>
                    <img src="/assets/icons/typescript.svg" alt="TypeScript Icon"/>
                    <p className={styles["skills-description"]}>TypeScript</p>
                </div>
                <div className={styles["skills-box"]}>
                    <img src="/assets/icons/react.svg" alt="React Icon"/>
                    <p className={styles["skills-description"]}>React</p>
                </div>
                <div className={styles["skills-box"]}>
                    <img src="/assets/icons/sass.svg" alt="Sass Icon"/>
                    <p className={styles["skills-description"]}>Sass</p>
                </div>
                {/* <div className={styles["skills-box"]}>
                    <img src="../src/assets/icons/bootstrap.svg" alt="Bootstrap Icon"/>
                    <p className={styles["skills-description"]}>Bootstrap</p>
                </div> */}
            </div>
        </section>
    )
}