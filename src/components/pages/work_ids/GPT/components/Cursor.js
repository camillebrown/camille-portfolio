import React, { useEffect } from 'react';

import { MdKeyboardArrowDown } from '../../../../../assets/icons';

export default function Cursor() {
  useEffect(() => {
    const mouseCursor = document.querySelector('.cursor');
    const mainImg = document.querySelector('.gpt-detail-main_img');

    function showCursor(e) {
      mouseCursor.style.visibility = 'visible';
    }

    function hideCursor(e) {
      mouseCursor.style.visibility = 'hidden';
    }

    function moveCursor(e) {
      mouseCursor.style.top = `${e.pageY}px`;
      mouseCursor.style.left = `${e.pageX}px`;
    }

    mainImg.addEventListener('mouseenter', showCursor);
    mainImg.addEventListener('mousemove', moveCursor);
    mainImg.addEventListener('mouseleave', hideCursor);
  });

  return (
    <div className="cursor">
      <p>Scroll</p>
      <MdKeyboardArrowDown />
    </div>
  );
}
