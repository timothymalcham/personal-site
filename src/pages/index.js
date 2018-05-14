import React from 'react'

import haScreenshot from '../layouts/img/ha.png'
import oeScreenshot from '../layouts/img/oe.jpg'
import gmScreenshot from '../layouts/img/gm.gif'

const IndexPage = () => (
  <div>

    <p className='intro'>
      I’m Timothy Malcham. I'm a developer who cares about writing high quality code, contributing to well thought out design, and providing users with an excellent experience.
    </p>

    <p>Work Experience:</p>

    <section>
      <h2>Holland America Line</h2>
      <h3>Full Stack Developer, July 2016 – March 2018</h3>
      <p>At Holland America Line I built UI features with Javascript (Angular and React), CSS (PostCSS, LESS, etc.) and worked on APIs/CMS services with Node.js and AEM.</p>
    </section>

    <section>
      <h2>Design Commission</h2>
      <h3>Front End Engineer, May 2014 – July 2016</h3>
      <p>At Design Commission, I built full-stack and client side web applications with a wide range of technology. I completed projects for a wide range of startups and established companies, working both as a solo developer and with a team.</p>
    </section>

    <section>
      <h2>Front End Developer (Contractor)</h2>
      <h3>Blue Nile, Vitamin T, UP Global, and more, July 2013 – May 2014</h3>
      <p>I worked as a contract developer at a number of Seattle creative agencies, startups, and a non-profit, using a variety of languages and technologies.</p>
    </section>

    <section>
      <h2>Startup Rocket LaunchPad</h2>
      <h3>Front End Developer, 2012 – June 2013</h3>
      <p>Designed and developed responsive web apps and sites for startups, under the mentorship of an experienced developer and entrepreneur.</p>
    </section>

    <p>Education:</p>

    <section>
      <h2>Code Fellows</h2>
      <h3>October 2013 – December 2013</h3>
      <p>Participated in an eight-week long software engineering program. Learned JavaScript language fundamentals, software engineering concepts, and how to build full-stack JS apps.</p>
    </section>

    <section>
      <h2>School of Visual Concepts</h2>
      <h3>2011 – 2012</h3>
      <p>Studied typography, web design, and UX design.</p>
    </section>

    <p>Skills</p>
    <p>JavaScript (React, Redux, Angular.js, Node.js, Webpack, Gulp), HTML5, Handlebars, Pug/Jade, CSS, SCSS, LESS, PostCSS. Some experience with: Java, AEM, PHP, Wordpress, Drupal.</p>

    <p>Selected Work:</p>

    <img src={ oeScreenshot } alt='Screenshot of Optimum Energy dashboard' />

    <img src={ haScreenshot } alt='Screenshot of Holland America account page' />

    <img src={ gmScreenshot } alt='Animated gif showing Gimlet Media social media card generator' />



  </div>
)

export default IndexPage
