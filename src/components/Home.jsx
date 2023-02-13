import React from "react";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles["header-section"]}>
            <h1 className={styles["header-description"]}>Meet your <br></br><span className={styles["header-span"]}>Front End </span>Developer.</h1>
        </div>
    )
}