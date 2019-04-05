import React from "react"
import styles from "./blogPostListItem.module.css"

export default (props) => (
    <li>
        <a data-hook="link-external"
            href={props.postLink}
            rel="external">{props.postTitle}</a>, <em className={styles.BlogPostListPubDate}>published {props.pubDate}</em>
    </li>
)