import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import {
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from 'react-icons/ri';
import { FaDribbbleSquare } from 'react-icons/fa';

export default function SocialIcons({ className }) {
  return (
    <>
      <LinkRouter
        to="//www.twitter.com/camilllebrown"
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTwitterFill size={27} />
      </LinkRouter>
      <LinkRouter
        to="//www.linkedin.com/in/camillenbrown/"
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiLinkedinBoxFill size={27} />
      </LinkRouter>
      <LinkRouter
        to="//www.github.com/camillebrown"
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiGithubFill size={27} />
      </LinkRouter>
      <LinkRouter
        to="//www.dribbble.com/camillebrown11"
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDribbbleSquare size={27} />
      </LinkRouter>
    </>
  );
}
