import React from 'react';
import { Footer, FooterIcons, SocialIcon, WebRights } from './StaticFooterElements';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function StaticFooter() {
  return (
    <Footer className="footer py-5">
      <div className="content has-text-centered px-6">
        <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
          <WebRights>
            Camille Brown © {new Date().getFullYear()}. All rights reserved.
          </WebRights>
          <FooterIcons
            className="is-flex is-justify-content-space-between is-align-items-center mt-4"
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
          </FooterIcons>
        </div>
      </div>
    </Footer>
  );
}
