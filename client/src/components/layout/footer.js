import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container bg-black">
      <span className="text-muted">
        &#169;
        {`${new Date().getFullYear()} Company Inc. All Rights Reserved`}
      </span>
      <div className="pull-right">
        <a
          href="https://github.com/martindavid/hackathon-starter"
          target="blank"
        >
          Github
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
