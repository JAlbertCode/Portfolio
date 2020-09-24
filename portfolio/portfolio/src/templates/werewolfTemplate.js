import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function werewolfTemplate({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
            >
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div className="blog-post-content">
            <h1>Fullstack Academy Capstone</h1>
            <p>
              For the final project at Fullstack Academy, we were split into
              teams of four and given two and a half weeks to define and develop
              a project. Everyone in our group were fans of table top games and
              we decided to give new life to an old concept. The game we settled
              on was Werewolf. Werewolf is a social deduction game where some
              players are on the "bad" team and others are on the "good" team
              but neither player knows the other's identity. Throughout the game
              players vote to kill each other based on their suspicions and the
              last team standing wins the game. Our team created a new spin on
              the game by allowing groups to form in online video conferences
              and by programmatically managing all of the events in the game.
            </p>
            <h1 className="heading">Gameplay Demo</h1>
            <video
              src="assets/werewolf-preview.mp4"
              width="100%"
              height="100%"
              controls
            />
            <h1 className="heading">Game Rules</h1>
            <p>
              The game proceeds in alternating night and day rounds, beginning
              with night.
            </p>
            {/* <p>The Night</p> */}
            <p>
              In the beginning of the night only the werewolves can see.
              Everyone else is sleeping and so their video is stopped. While
              everyone sleeps the werewolves will choose a villager to kill.
              When the werewolves have made their kill, they too sleep.
            </p>
            <p>
              After the werewolves have made their kill, the village Doctor
              awakens and, not knowing who has been killed, chooses a villager
              (which can be themself) to heal. The villager chosen will survive
              the night if the werewolves chose to kill them. Once the Doctor
              has made their choice, they go back to sleep.
            </p>
            <p>
              Next, the village Seer awakens. The Seer can choose one villager
              to have their true identity revealed. If the villager chosen is a
              werewolf, the Seer will be told so. Otherwise the Seer returns to
              sleep.
            </p>
            <p>
              Once the Seer has finished we transition to daytime and the
              villagers find out who has been killed during the night. That
              villager is immediately dead and out of the game. They do not
              reveal their identity.
            </p>
            <p>
              Daytime is very simple; all the living villagers gather and decide
              who to kill in hopes of ridding themselves of werewolves. As soon
              as a majority votes for a single villager to kill, that villager
              is immediately dead and out of the game.
            </p>
            <p>
              There are no restrictions on speech. Any living villager can say
              anything they want -- truth, misdirection, nonsense, or a
              barefaced lie. Dead villagers may not speak at all. If a villager
              senses the other villagers are beginning to turn on them and they
              want to protest their innocence or reveal some information (like
              the Seer's visions), they must do it before the votes go through.
            </p>
            <p>Once a player is killed, night falls and the cycle repeats. </p>
            <h2 className="heading">Winning:</h2>
            <p>The villagers win if they kill all of the werewolves.</p>
            <p>
              The werewolves win if they kill enough villagers so that the
              numbers are even. (Example: Two werewolves and two villagers)
            </p>

            <a
              href="https://github.com/Werewolf-Capstone/Werewolf-Final"
              target="_blank"
              className="button -primary"
              rel="noopener noreferrer"
            >
              View the Code &rarr;
            </a>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`
