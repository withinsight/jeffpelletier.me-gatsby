import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ContentH2 from "../components/contentH2"

export default () => (
    <Layout>
        <ContentH2 title="UX Designer &amp; Developer" />

        <p>I'm a designer who's been coding professionally for over 15 years. <br /> I love technology, and write about it (when lightning strikes).</p>

        <p>You're viewing the Gatsby version of my portfolio. There's also <a href="http://jeffpelletier.me">a static HTML version</a>, if that's your flavor.</p>

        <p>Check out some of my recent <a href="work.html">work</a>, some of the <Link to="writing">words I've written</Link>, and <a href="mailto:jeffrey.k.pelletier+folio@gmail.com">get in touch</a> if you want to chat.</p>
    </Layout>
)
