import React from "react"
import { Link } from "gatsby"
import resume from "../assets/Pelletier-Jeffrey.pdf"
import styles from "./nav.module.css"

export default () => (
    <nav className={styles.NavPrimary}>
        <ul className={styles.NavPrimaryList}>
            <li className={styles.NavPrimaryItem}>
                <Link to="work" className={styles.NavPrimaryLink}>Work</Link>
            </li>
            <li className={styles.NavPrimaryItem}>
                <Link to="writing" className={styles.NavPrimaryLink}>Writing</Link>
            </li>
            <li className={styles.NavPrimaryItem}>
                <Link to="radical" className={styles.NavPrimaryLink}>Radical</Link>
            </li>
            <li className={styles.NavPrimaryItem}>
                <a className={styles.NavPrimaryLink} href={resume}>Resume</a>
            </li>
        </ul>
    </nav>
)