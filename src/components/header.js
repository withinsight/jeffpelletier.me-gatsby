import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"
import RacingStripe from "./racingStripe"
import Nav from "./nav"

export default () => (
    <header className={styles.Header}>
        <h1 className={styles.HeaderH1}>
            <Link to="/">Jeff<br />Pelletier</Link>
        </h1>

        <RacingStripe />
        <Nav />
    </header>
)

