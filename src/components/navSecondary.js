import React from "react"
import styles from "./navSecondary.module.css"

export default () => (
    <ul className={styles.NavSecondary}>
        <li className={styles.NavSecondaryItem}>
            <a className={styles.NavSecondaryLink}
                data-hook="link-external"
                href="https://twitter.com/withinsight"
                rel="external">Twitter
            </a>
        </li>
        <li className={styles.NavSecondaryItem}>
            <a className={styles.NavSecondaryLink}
                data-hook="link-external"
                href="https://github.com/withinsight/"
                rel="external">GitHub
            </a>
        </li>
        <li className={styles.NavSecondaryItem}>
            <a className={styles.NavSecondaryLink}
                data-hook="link-external"
                href="https://www.linkedin.com/in/withinsight/"
                rel="external">LinkedIn
            </a>
        </li>
    </ul>
)