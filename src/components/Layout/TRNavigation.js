import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TRNavigation({ settings }) {
  const navigate = useNavigate();
  const { textColor, lineColor, hoverTextColor } = settings;
  const { navigateTo, linePlacement, navTitle, titlePlacement } =
    settings.topNav;

  return (
    <div className='z-50 hidden md:block'>
      <p
        onClick={() => navigate(navigateTo)}
        className={`fixed ${titlePlacement} m-2 -rotate-90 uppercase font-gotham-light text-xxs tracking-stretch hover:cursor-pointer peer/primary ${textColor} ${hoverTextColor}`}
      >
        {navTitle}
      </p>
      <span
        className={`fixed m-2 -rotate-90 p-[0.03rem] left-3 w-10 peer-hover/primary:w-16 peer-hover/primary:left-[0.5px] transition-all duration-500 ease-in-out
    ${lineColor} ${linePlacement}`}
      />
    </div>
  );
}
