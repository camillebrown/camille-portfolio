import React from 'react';

import './scroll-up.css';
import useScrollToTop from '../../../hooks/useScrollToTop';

export default function ScrollUp() {
  const { scrollToTop } = useScrollToTop();

  return (
    <div className="back-to-top">
      <section id="down-scroll-div" className="down-scroll">
        <div onClick={scrollToTop}>
          <span id="span"></span>
          <p>Back to Top</p>
        </div>
      </section>
    </div>
  );
}
