import React from "react"
import { Link } from "gatsby"
import styles from "./racingStripe.module.css"

export default () => (
    <div className={styles.RacingStripe}>
        <Link to="/">
            <div className={styles.RacingStripeBadge}>
                <span className={styles.RacingStripeBadgeNumber}>11</span>
            </div>
        </Link>
        <span className={styles.RacingStripeHashes}>
            <span className={styles.RacingStripeHash}></span>
            <span className={styles.RacingStripeHash}></span>
            <span className={styles.RacingStripeHash}></span>
            <span className={styles.RacingStripeHash}></span>
            <span className={styles.RacingStripeHash}></span>
        </span>
    </div>
)