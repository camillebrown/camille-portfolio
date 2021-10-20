import React from 'react';
import { SocialIcon, WebRights } from './StaticFooterElements';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function StaticFooter() {
  return (
    <footer className="footer py-5" style={{ background: '#f2f0eb' }}>
      <div className="content has-text-centered px-6">
        <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
          <WebRights>
            Camille Brown © {new Date().getFullYear()}. All rights reserved.
          </WebRights>
          <div
            className="is-flex is-justify-content-space-between is-align-items-center mt-4"
            style={{ width: '10vw' }}
          >
            <SocialIcon
              className="is-size-4"
              to="//www.github.com/camillebrown"
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              className="is-size-4"
              to="//www.linkedin.com/in/camillenbrown/"
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon
              className="is-size-4"
              to="//www.instagram.com/camilllebrown"
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon
              className="is-size-4"
              to="//www.twitter.com/camilllebrown"
            >
              <FaTwitter />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
