import React from 'react';
import { Link } from 'react-router-dom';

export default function Content() {
  return (
    <div className="relative mxl:w-2/5 mx-10 h-3/4 mxl:h-[90%] flex flex-col mxl:justify-center">
      <div className="relative xs:h-[15%] lg:h-1/4 overflow-hidden my-2">
        <p className="absolute bottom-0 w-full font-dream-ave uppercase whitespace-nowrap transition-transform duration-1000 delay-1000 slide-in-bottom text-heading-fluid leading-12 sm:leading-13 md:text-9xl md:leading-13 drop-shadow-lg drop-shadow-base-tan">
          About
        </p>
      </div>
      <div className="z-20 text-xxs xs:text-xs md:text-sm h-full xs:h-3/5">
        <p className="font-la-belle text-fluid md:text-4xl my-3">
          &lt;h1&gt;Hi, I'm Camille.&lt;h1&gt;
        </p>
        <p className="tracking-wider leading-6">
          I design websites with passion, creativity, and user experience in
          mind. With eye-catching pages that draw in your end users, you'll
          truly see your vision come to life!
        </p>
        <p className="my-4 tracking-wider leading-6">
          Senior Frontend Developer at
          <Link
            to="https://www.creditkey.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage pb-[0.075rem] border-b-2 border-b-sage font-medium mx-1"
          >
            Credit Key
          </Link>
          by day, California native and global explorer by heart. As a Los
          Angeles local, you can find me at concerts & festivals, experiencing
          new and diverse restaurants, or relaxing with a juicy fiction novel.
          When I'm out of office, I love to travel around the world and emerse
          myself in new cultures. Let's connect and share experiences!
        </p>
        <Link
          to="https://drive.google.com/file/d/1vbl_OcsZT4XjZu0KZk9IEOuulllBHP-z/view?usp=drive_link"
          className="block pb transition-max-w duration-2000 ease-in-out border-b-2 hover:border-sage text-deep-gray font-gotham-medium max-w-5 hover:max-w-full hover:text-sage mb-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </Link>
        <p className="font-dream-ave text-2xl xs:text-3xl mt-2 uppercase">skills</p>
        <p className="tracking-wider leading-5 xs:leading-6 mb-12 xs:mb-0">
          HTML | SQL | CSS Frameworks | MongoB | Flask | React | Python |
          PostgreSQL | NodeJS | Strategy | Agile Methodologies | Ruby on Rails
        </p>
      </div>
    </div>
  );
}
