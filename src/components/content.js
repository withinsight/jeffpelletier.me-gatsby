import React from "react"
import styles from "./content.module.css"

export default ({ children }) => (
    <section className={styles.Content}>
        {children}
    </section>
)