import React from 'react';
import moment from 'moment';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <span className="copyright">
            Shaun Lobsinger
            {moment().format('YYYY')}
          </span>
        </div>
        <div className="col-md-4 offset-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="https://github.com/Shaun2D2" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-alt" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/shaun-lobsinger-b4098066" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:shaun.lobsinger@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
