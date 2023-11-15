import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import scroll from '../../../assets/images/scroll.png';

export default function ProjectsList() {
  const navigate = useNavigate();
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        setIsScrolledToBottom(true);
      } else {
        setIsScrolledToBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: 'Better',
      descriptor: 'Api-Connected Crud Web Application',
      path: 'better',
    },
    {
      title: 'Cookbook Curator',
      short_title: 'Cookbook',
      descriptor: 'Api-Connected Crud Web Application',
      path: 'cookbook-curator',
    },
    {
      title: 'Got The Beat!',
      descriptor: 'Javascript Scored Application',
      path: 'got-the-beat',
    },
    {
      title: 'The Banddeux',
      short_title: 'Banddeux',
      descriptor: 'Contract Web Design',
      path: 'banddeux',
    },
    {
      title: 'APGA Foundation',
      short_title: 'APGA',
      descriptor: 'Contract Web Design',
      path: 'apga',
    },
    {
      title: 'GPT-3 Responsive',
      short_title: 'GPT-3',
      descriptor: 'Practice Replica Site',
      path: 'gpt',
    },
  ];

  return (
    <div className="w-screen my-10 lg:my-24 relative">
      <div
        className={classNames(
          'hidden xs:block fixed bottom-10 right-10 w-10 h-10 bg-center bg-no-repeat bg-contain float transition duration-500',
          isScrolledToBottom ? 'opacity-0' : 'opacity-100'
        )}
        style={{ backgroundImage: `url(${scroll})` }}
      />
      {projects.map((p, idx) => {
        return (
          <div key={idx} className="flex flex-col mb-6 3xs:mb-4 xs:mb-8 sm:mb-16 lg:mb-20">
            <p
              onClick={() => navigate(`/work/${p.path}`)}
              className="uppercase hover:italic hover:text-normal-tan whitespace-nowrap hover:cursor-pointer leading-snug xxs:leading-12 transition-transform duration-500 hover:translate-x-[1rem]"
            >
              <span className={classNames(p.short_title ? 'hidden md:inline' : '')}>{p.title}</span>
              <span className='inline md:hidden'>{p.short_title}</span>
            </p>
            <div className="hidden md:flex items-center">
              <hr className="w-4 text-white mr-2" />
              <p className="uppercase font-gotham-light text-white text-xxs md:tracking-stretch">
                {p.descriptor}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
