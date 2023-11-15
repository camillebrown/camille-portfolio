import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MobileTopNav({ settings }) {
  const navigate = useNavigate();
  const { textColor, hoverTextColor, topNav, bottomNav, mobileNav } = settings;

  return (
    <div className="z-50 md:hidden flex flex-col 4xs:flex-row justify-between px-4 py-6 xxs:p-10">
      <div className="flex items-center gap-3">
        <hr
          className={classNames(
            'hidden xxs:inline border-0.5 w-10',
            mobileNav ? mobileNav?.lineColor : 'border-white'
          )}
        />
        <p
          onClick={() => navigate(topNav.navigateTo)}
          className={`uppercase font-gotham-light text-xxs tracking-stretch hover:cursor-pointer ${textColor} ${hoverTextColor}`}
        >
          {topNav.navTitle}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <p
          onClick={() => navigate(bottomNav.navigateTo)}
          className={`uppercase font-gotham-light text-xxs tracking-stretch hover:cursor-pointer ${textColor} ${hoverTextColor}`}
        >
          {bottomNav.navTitle}
        </p>
        <hr
          className={classNames(
            'hidden xxs:inline border-0.5 w-10',
            mobileNav ? mobileNav?.lineColor : 'border-white'
          )}
        />
      </div>
    </div>
  );
}
