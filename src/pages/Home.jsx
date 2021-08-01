import React, { Fragment } from 'react';
import { Link } from 'react-scroll';

import Timeline from '../components/timeline';
import Projects from '../components/projects';
import Section from '../components/section';

const Home = () => (
  <>
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">It&rsquo;s nice to meet you!</div>
          <div className="intro-heading text-uppercase">I&rsquo;m Shaun</div>
          <Link
            to="hello"
            className="nav-link--pointer"
            smooth
          >
            <i className="fas fa-chevron-down fa-4x brand-color animated infinite bounce slower delay-2s" />
          </Link>
        </div>
      </div>
    </header>
	<Section id="hello">
		<div className="row">
          <div className="col-sm-4 offset-sm-4">
            <div className="team-member">
              <img src="assets/slobsinger.jpg" className="img-responsive rounded-circle" />
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/shaun-lobsinger-b4098066" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/Shaun2D2" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="mailto:shaun.lobsinger@gmail.com">
                    <i className="fas fa-envelope" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p className="large text-muted">
              I&rsquo;m <strong>Shaun</strong>
              , a passionate web developer and user experience advocate who is always looking for new and exciting opportunities. My degree in Human Factors (MS 2015) and over 8 years experience with software development provide a unique balance of technical and UX insights.
            </p>
            <p className="large text-muted">I have experience with several modern languages and frameworks such as Node.js and React.  Feel free to check out my resume below.</p>
          </div>
          <div className="col-sm-12 text-center">
            <a href="assets/resume.pdf" className="btn btn-primary btn-lg" target="_blank">See Resume</a>
          </div>
        </div>
	</Section>

    <Section title="My Stack" subtitle="Here is a sample of the tech I typically work with.">
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fab fa-node-js fa-stack-1x fa-inverse" />
          </span>
          <h4 className="service-heading">Backend</h4>
          <p className="text-muted">
            In the past I&rsquo;ve used
            {' '}
            <a href="https://secure.php.net/" target="_blank">PHP</a>
            {' '}
            or
            {' '}
            <a href="https://www.adobe.com/products/coldfusion-enterprise.html" target="_blank">ColdFusion</a>
            {' '}
            to power my backend, however, I&rsquo;ve switched to mostly using
            {' '}
            <a href="https://nodejs.org/en/" target="_blank">Node.js</a>
            .
          </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fab fa-react fa-stack-1x fa-inverse" />
          </span>
          <h4 className="service-heading">Frontend</h4>
          <p className="text-muted">
            <a href="https://reactjs.org/" target="_blank">React</a>
            {' '}
            and
            {' '}
            <a href="https://redux.js.org/" target="_blank">Redux</a>
            {' '}
            is my go to frameworks to manage frontend UI and state.  I&rsquo;ve commonly implement other popular packages / frameworks such as
            {' '}
            <a href="https://momentjs.com/" target="_blank">moment.js</a>
            ,
            {' '}
            <a href="https://lodash.com/" target="_blank">lodash</a>
            , and
            {' '}
            <a href="https://getbootstrap.com/" target="_blank">bootstrap</a>
            .
          </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fab fa-sass fa-stack-1x fa-inverse" />
          </span>
          <h4 className="service-heading">Build</h4>
          <p className="text-muted">
            I use modern build tools such as
            {' '}
            <a href="https://webpack.js.org/" target="_blank">Webpack</a>
            {' '}
            in my workflow.  Along with other goodies like
            <a href="https://eslint.org/" target="_blank">eslint</a>
            {' '}
            and
            {' '}
            <a href="https://babeljs.io/" target="_blank">babel</a>
            {' '}
            I can create powerful application quickly.
          </p>
        </div>
      </div>

    </Section>

    <Section title="My Experience" subtitle="What I&rsquo;ve been up to." component={<Timeline />} />

  	<Section title="My Portfolio" subtitle="Here is a sample of my work" component={<Projects />} />
  </>
);

export default Home;
