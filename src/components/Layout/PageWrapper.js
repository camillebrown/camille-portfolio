import React from 'react';
import classNames from 'classnames';
import TRNavigation from './TRNavigation';
import BRNavigation from './BRNavigation';
import MobileTopNav from './MobileTopNav';

export default function PageWrapper({ children, settings }) {
  const { bgColor, showTags, tagsColor } = settings;

  const tags = [
    { tag: 'body', position: 'left-40 top-28' },
    { tag: 'div', position: 'left-64 top-56' },
    { tag: 'div', position: 'left-44 bottom-60' },
    { tag: 'body', position: 'left-28 bottom-24' },
  ];
  
  return (
    <div
      className={classNames(
        'w-full h-full min-h-screen relative font-montserrat overflow-y-scroll smooth-scroll',
        bgColor
      )}
    >
      <TRNavigation settings={settings} />
      <BRNavigation settings={settings} />
      <MobileTopNav settings={settings} />
      {showTags && (
        <div className='hidden mxl:inline-block'>
          {tags.map((t, idx) => {
            return (
              <span
                key={idx}
                className={classNames(
                  'font-la-belle absolute text-gray text-xl animate__animated animate__fadeIn',
                  t.position,
                  tagsColor ? tagsColor : 'text-gray'
                )}
              >
                &lt;{t.tag}&gt;
              </span>
            );
          })}
        </div>
      )}
      {children}
    </div>
  );
}
