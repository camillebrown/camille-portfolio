import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({
  children,
  childClass,
  parentClass,
  customAnimation,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  let start;
  let finish;

  if (!customAnimation) {
    start = 'opacity-100';
    finish = 'opacity-0';
  } else {
    start = customAnimation;
    finish = '';
  }

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);
  }, []);

  return (
    <div className={parentClass}>
      <div
        ref={ref}
        className={classNames(
          'transition-opacity duration-1500 h-full w-full',
          isVisible ? start : finish,
          childClass
        )}
      >
        {children}
      </div>
    </div>
  );
}
