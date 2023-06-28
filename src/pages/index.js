import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ContentH2 from "../components/contentH2"

export default () => (
    <Layout>
        <ContentH2 title="Design Systems Technologist" />

        <p>I'm a hybrid who's specialized in web-based design systems for the past 4 years.</p>

        <p>During this time, I've built automated design token services, contributed to building Lit Web Components, and gained a passion for improving team operations.</p>

        <p>On the latter point, I implemented a feature workflow for design systems team work, collaborated on component specs for engineering handoff, owned metrics for the design systems team, and advocated for design systems internally by hosting watch parties.</p>

        <p>I've been experimenting and built 2 different versions of my portfolio. You're currently viewing the <a data-hook="link-external" href="https://www.gatsbyjs.org/" rel="external">Gatsby</a> version.</p>

        <p>The vanilla HTML version is also available (note which version you're viewing via the URL bar):</p>

        <ul>
            <li><a href="http://jeffpelletier.me">Vanilla HTML/CSS/JS Portfolio</a>.</li>
        </ul>

        <p>Check out some of my recent <a href="work.html">work</a>, some of the <Link to="/writing">words I've written</Link>, and <a href="mailto:jeffrey.k.pelletier+folio@gmail.com">get in touch</a> if you want to chat.</p>
    </Layout>
)
