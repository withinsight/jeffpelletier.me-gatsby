import React from "react"
import styles from "./card.module.css"

export default (props) => (
    <div className="Card">
        <h3 className={styles.CardTitle}>
            Client: {props.clientTitle}. Project: <a href={props.projectLink} data-hook="link-external" rel="external">{props.projectTitle}</a>
        </h3>
        <div className={styles.CardContent}>
            <img src={props.imageSrc} alt={props.imageAltText} className={`${styles.CardImage} ${props.imageAlignRight ? styles.CardImageRight : ''}`} />
            <div className={styles.CardSummary}>
                {props.children}
            </div>
        </div>
    </div>
)