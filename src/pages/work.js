import React from "react"
import Layout from "../components/layout"
import ContentH2 from "../components/contenth2"
import Divider from "../components/divider"
import Card from "../components/card"
import ImgGreatMinds from "../assets/img/greatminds-macbook.png"
import ImgSparkPost from "../assets/img/sparkpost-macbook.png"
import ImgNUS from "../assets/img/sanfordharmony-ipad.png"

export default () => (
    <Layout>
        <ContentH2 title="Work" />

        <p>A sampling of work (that's publicly accessible) I've contributed to in recent years.</p>

        <Divider />

        <Card clientTitle="Great Minds"
            projectLink="https://greatminds.org/"
            projectTitle="greatminds.org"
            imageSrc={ImgGreatMinds}
            imageAltText="Great Minds homepage"
            imageAlignRight={true}>
            <p>Great Minds was a responsive redesign, from the ground up. I was brought on to the project after the initial groundwork had been laid, so I was able to focus on all the responsive aspects of the project. Bootstrap was used, so my work involved heavy customization of Bootstrap and CSS overrides to achieve the client's desired intent. I also focused on frontend performance, primarily addressing the large background images and serving the proper size image to users based on <a href="https://timkadlec.com/2012/04/media-query-asset-downloading-results/" data-hook="link-external" rel="external">Tim Kadlec's research</a>.</p>

            <p>I additionally developed a <a href="https://greatminds.org/styleguides" rel="external" data-hook="link-external">living style guide for Great Minds</a> using KSS, which updates based on CSS changes in the product.</p>

            <p>Check out the <a data-hook="link-external" href="https://www.mobomo.com/portfolio/great-minds/" rel="external">case study</a>.</p>
        </Card>

        <Divider />

        <Card clientTitle="Message Systems"
            projectLink="https://www.mobomo.com/portfolio/sparkpost-email-analytics/"
            projectTitle="SparkPost"
            imageSrc={ImgSparkPost}
            imageAltText="SparkPost homepage"
            imageAlignRight={false}>
            <p>SparkPost is a competitor to MailChimp's Mandrill transactional email service. I built the UI pieces of the product, the most complex being the responsive nav. Cards, buttons, tables and charts were just some of the components that were part of this data-heavy web app.</p>

            <p>I also built living style guide for this project, but unfortunately the work isn't public without signing up. You can check out the <a data-hook="link-external" href="https://www.mobomo.com/portfolio/sparkpost-email-analytics/" rel="external">case study</a> for more details, however.</p>
        </Card>

        <Divider />

        <Card clientTitle="National University System"
            projectLink="https://www.mobomo.com/portfolio/nus/"
            projectTitle="Sanford Harmony SEL"
            imageSrc={ImgNUS}
            imageAltText="Sanford Harmony iPad application screenshot"
            imageAlignRight={true}>
            <p>The Sanford Harmony SEL (social emotional learning) tablet app was a unique problem to solve: the client is using this application in classrooms, and needed it to run on iPads, Chromebooks, and Windows Phone devices.</p>

            <p>I was the tech lead in developing this application using Ionic, which featured "storybooks" with audio voice-overs, a variety of UI components designed to be easy to use for schoolgrade aged children, and even made use of local storage to store data locally on devices, and not share sensitive information over the network.</p>

            <p>The Sanford Harmony SEL app can be installed via the <a href="https://itunes.apple.com/us/app/sanford-sel/id1187943946?mt=8" rel="external" data-hook="link-external">Apple App Store</a> or <a href="https://play.google.com/store/apps/details?id=org.sanfordharmony.harmonymobile&hl=en_US" rel="external" data-hook="link-external">Google Play store</a>. Or, you can check out the <a data-hook="link-external" href="https://www.mobomo.com/portfolio/nus/" rel="external">case study</a>.</p>
        </Card>

    </Layout>
)