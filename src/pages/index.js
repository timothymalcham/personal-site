import React from 'react'

import haScreenshot from '../layouts/img/ha.png'
import oeScreenshot from '../layouts/img/oe.jpg'
import gmScreenshot from '../layouts/img/gm.gif'
import readingAppScreenshot from '../layouts/img/reading-app.png'
import seaScreenshot from '../layouts/img/sea.png'

const IndexPage = () => (
  <div className='container'>

    <p className='intro'>
      I’m Timothy Malcham. I'm a developer who cares about writing high quality code, contributing to well thought out design, and providing users with an excellent experience.
    </p>

    <section>
      <a className='links' href='https://github.com/timothymalcham'>Github</a>
      <a className='links' href='https://www.linkedin.com/in/timothy-malcham-16a9823b/'>LinkedIn</a>
      <a className='links' href='https://drive.google.com/file/d/1hww2T-CTUkgiqHjcyZ-gwP-yvJR_QAfV/view?usp=sharing'>Resume</a>
    </section>

    <p className='section__header'>Work Experience:</p>

    <div className='grid'>
      <section className='section__career'>
        <h2 className='section__title'>Holland America Line</h2>
        <h3 className='section__sub-title'>Full Stack Developer, July 2016 – March 2018</h3>
        <p>At Holland America Line I built UI features with Javascript (Angular and React), CSS (PostCSS, LESS, etc.) and worked on APIs/CMS services with Node.js and AEM.</p>
      </section>

      <section className='section__career'>
        <h2 className='section__title'>Design Commission</h2>
        <h3 className='section__sub-title'>Front End Engineer, May 2014 – July 2016</h3>
        <p>At Design Commission, I built full-stack and client side web applications with a wide range of technology. I completed projects for a wide range of startups and established companies, working both as a solo developer and with a team.</p>
      </section>

      <section className='section__career'>
        <h2 className='section__title'>Front End Developer (Contractor)</h2>
        <h3 className='section__sub-title'>Blue Nile, Vitamin T, UP Global, and more, July 2013 – May 2014</h3>
        <p>I worked as a contract developer at a number of Seattle creative agencies, startups, and a non-profit, using a variety of languages and technologies.</p>
      </section>

      <section className='section__career'>
        <h2 className='section__title'>Startup Rocket LaunchPad</h2>
        <h3 className='section__sub-title'>Front End Developer, 2012 – June 2013</h3>
        <p>Designed and developed responsive web apps and sites for startups, under the mentorship of an experienced developer and entrepreneur.</p>
      </section>
    </div>

    <p className='section__header'>Education:</p>

    <div className='grid'>
      <section className='section__career'>
        <h2 className='section__title'>Code Fellows</h2>
        <h3 className='section__sub-title'>October 2013 – December 2013</h3>
        <p>Participated in an eight-week long software engineering program. Learned JavaScript language fundamentals, software engineering concepts, and how to build full-stack JS apps.</p>
      </section>

      <section className='section__career'>
        <h2 className='section__title'>School of Visual Concepts</h2>
        <h3 className='section__sub-title'>2011 – 2012</h3>
        <p>Studied typography, web design, and UX design.</p>
      </section>
    </div>

    <p className='section__header'>Selected Work:</p>

    <section className='section__work'>
      <img className='section__image' src={ readingAppScreenshot } alt='Screenshot of Reading App' />
      <h2 className='section__title'>Reading App</h2>
      <h3 className='section__sub-title'>Personal project — React, Redux, Node.js, GraphQL</h3>
    </section>

    <section className='section__work'>
      <img className='section__image' src={ oeScreenshot } alt='Screenshot of Optimum Energy dashboard' />
      <h2 className='section__title'>HVAC Management Dashboards and Setup Wizard</h2>
      <h3 className='section__sub-title'>Optimum Energy (Design Commission) — Angular.js, SCSS</h3>
    </section>

    <section className='section__work'>
      <img className='section__image' src={ haScreenshot } alt='Screenshot of Holland America account page' />
      <h2 className='section__title'>Customer Account</h2>
      <h3 className='section__sub-title'>Holland America Group — React, PostCSS, AEM, Node.js</h3>
    </section>

    <section className='section__work'>
      <img className='section__image' src={ seaScreenshot } alt='Screenshot of Seabourn Cruise Line Interactive Destination Map' />
      <h2 className='section__title'>Cruise Destinations</h2>
      <h3 className='section__sub-title'>Seabourn Cruise Line — Angular.js, D3.js, LESS</h3>
    </section>

    <section className='section__work'>
      <img className='section__image' src={ gmScreenshot } alt='Animated gif showing Gimlet Media social media card generator' />
      <h2 className='section__title'>Social Media Card Generator</h2>
      <h3 className='section__sub-title'>Gimlet Media (Design Commission) — Wordpress, SCSS</h3>
    </section>

  </div>
)

export default IndexPage
