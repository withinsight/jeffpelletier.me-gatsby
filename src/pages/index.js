import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ContentH2 from "../components/contentH2"

export default () => (
    <Layout>
        <ContentH2 title="UX Designer &amp; Developer" />

        <p>I'm a designer who's been coding professionally for over 15 years. <br /> I love technology, and write about it (when lightning strikes).</p>

        <p>I've been experimenting and built 3 different versions of my portfolio. You're currently viewing the <a data-hook="link-external" href="https://www.gatsbyjs.org/" rel="external">Gatsby</a> version.</p>

        <p>These additional versions are available (note which version you're viewing via the URL bar):</p>

        <ul>
            <li><a href="http://jeffpelletier.me">Vanilla HTML/CSS/JS Portfolio</a>.</li>
            <li><a href="http://stencil.jeffpelletier.me">Stencil Portfolio</a>. More about <a data-hook="link-external" href="https://stenciljs.com/" rel="external">Stencil</a>.</li>
        </ul>

        <p>Check out some of my recent <a href="work.html">work</a>, some of the <Link to="/writing">words I've written</Link>, and <a href="mailto:jeffrey.k.pelletier+folio@gmail.com">get in touch</a> if you want to chat.</p>
    </Layout>
)
