import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import RevealOnScroll from '../shared/RevealOnScroll';

export default function UnderConstruction() {
  const location = useLocation();
  const navigate = useNavigate();
  const { percentage, projectTitle, projectID } = location.state;

  return (
    <div className="bg-gradient-to-bl from-normal-tan from-2% via-mustard via-20% to-sage to-90% w-screen h-screen flex flex-col items-center justify-center">
      <RevealOnScroll parentclassName="w-3/5 mx-auto flex flex-col items-center justify-center">
        <p className="font-dream-ave text-7xl text-white text-center">
          Under Construction
        </p>
        <div className="w-full mt-6">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="font-montserrat font-extralight text-lg text-white tracking-ultra-wide uppercase">
              Site Nearly Ready
            </p>
            <p className="font-montserrat font-extralight text-sm text-white tracking-wide">
              Everything needs a little revamping, right? It'll be right back up
              soon!
            </p>
            <div className="p-4 border border-white rounded-md my-6 w-4/5">
              <div className="flex items-center gap-x-3 whitespace-nowrap">
                <div
                  className="flex w-full h-2 bg-deep-gray bg-opacity-20 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="flex flex-col justify-center rounded-full overflow-hidden bg-white text-xs text-white text-center whitespace-nowrap transition duration-500 w-1/4"></div>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-white font-montserrat tracking-wide">
                    {percentage}% Done
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <p
              onClick={() => navigate(`/work/${projectID}`)}
              className="text-center font-montserrat font-light text-sm text-white tracking-ultra-wide whitespace-nowrap hover:cursor-pointer rounded-md bg-deep-gray bg-opacity-20 py-2 px-4 hover:bg-opacity-40"
            >
              Back to {projectTitle}
            </p>
            <p
              onClick={() => navigate(`/work`)}
              className="text-center font-montserrat font-light text-sm text-white tracking-ultra-wide whitespace-nowrap hover:cursor-pointer rounded-md bg-deep-gray bg-opacity-20 py-2 px-4 hover:bg-opacity-40"
            >
              Back to Projects
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <div className="w-3/5 mx-auto flex items-end justify-center">
        <div className="flex items-start justify-around mt-32 w-1/2">
          <Link
            to="https://www.instagram.com/camilllebrown/"
            className="rounded-full border border-white p-3 hover:bg-deep-gray hover:bg-opacity-20 hover:cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-xl" />
          </Link>
          <Link
            to="https://github.com/camillebrown"
            className="rounded-full border border-white p-3 hover:bg-deep-gray hover:bg-opacity-20 hover:cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-xl" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/camillenbrown/"
            className="rounded-full border border-white p-3 hover:bg-deep-gray hover:bg-opacity-20 hover:cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
