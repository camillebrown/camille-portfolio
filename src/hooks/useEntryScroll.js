import { useEffect } from 'react';

function useEntryScroll(entry) {
  return useEffect(() => {
    const observer = new IntersectionObserver((item) => {
      if (item[0].isIntersecting) {
        item[0].target.classList.add('fade-in-top');
      }
    });

    if (entry) {
      observer.observe(entry);
    }
  }, [entry]);
}

export default useEntryScroll;
