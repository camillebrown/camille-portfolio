import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import { FaDesktop } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

import RevealOnScroll from '../../shared/RevealOnScroll';

export default function PageFooter({ project }) {
  return (
    <RevealOnScroll parentClass="mt-14" customAnimation="sm:slide-in-bottom">
      <div
        className={classnames(
          'h-30-screen lg:h-70-screen w-full md:w-[85%] m-auto text-base-tan mb-0 overflow-hidden flex justify-center items-start py-6 lg:py-12 relative',
          project?.headerTextColor,
          project?.headerColor
        )}
      >
        <div className="w-full py-10">
          <p className="w-full font-dream-ave text-mobile-fluid md:text-4xl xs:text-5xl lg:text-7xl uppercase whitespace-nowrap text-center">
            Check Out More
          </p>
          <div className="flex flex-col xxs:flex-row gap-3 xxs:gap-0 justify-center items-center my-4 lg:my-10 w-full">
            <Link
              to={project?.url}
              className={classnames(
                'mx-4 min-w-max w-1/4 inline-flex items-center justify-center gap-x-2 xxs:rounded-full xs:px-5 xs:py-2.5 text-xs 3xs:text-sm md:text-base lg:text-sm uppercase font-gotham-book xs:text-deep-gray xs:shadow-sm  transition-colors duration-500 ease-in-out xxs:hover:border-deep-gray pb border-b-2 border-deep-gray xxs:pb-0 xxs:border-none',
                project?.buttonColor,
                project?.headerTextColor
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDesktop
                className="-ml-0.5 h-5 w-5 hidden xxs:inline"
                aria-hidden="true"
              />
              {project?.type}
            </Link>
            {project?.git && (
              <Link
                to={project?.git}
                className={classnames(
                  'mx-4 min-w-max w-1/4 inline-flex items-center justify-center gap-x-2 xxs:rounded-full xs:px-5 xs:py-2.5 text-xs 3xs:text-sm md:text-base lg:text-sm uppercase font-gotham-book xs:text-deep-gray xs:shadow-sm  transition-colors duration-500 ease-in-out xxs:hover:border-deep-gray pb border-b-2 border-deep-gray xxs:pb-0 xxs:border-none',
                  project?.buttonColor,
                  project?.headerTextColor
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub
                  className="-ml-0.5 h-5 w-5 hidden xxs:inline"
                  aria-hidden="true"
                />
                Github
              </Link>
            )}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
