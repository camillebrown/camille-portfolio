import { useState, useEffect } from 'react';

function useScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
    return () => {
      setShowButton(false);
    };
  }, []);

  return {
    scrollToTop,
    showButton,
  };
}

export default useScrollToTop;
