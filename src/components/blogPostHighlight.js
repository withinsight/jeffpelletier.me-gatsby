import React from "react"
import styles from "./blogPostHighlight.module.css"

export default (props) => (
    <div className="BlogPostHighlight">
        <h4 className={styles.BlogPostHighlightTitle}>
            <a data-hook="link-external"
            href={props.postLink}
            rel="external">{props.postTitle}</a>
        </h4>
        <em className={styles.BlogPostHighlightPubDate}>published {props.pubDate}</em>
        <p className={styles.BlogPostHighlightListTitle}><strong>Highlights:</strong></p>
        {props.children}
    </div>
)