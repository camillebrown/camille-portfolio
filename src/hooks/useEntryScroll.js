import { useEffect } from 'react';

function useEntryScroll(tag, animation) {
  useEffect(() => {
    let elements = document.querySelectorAll(tag);

    const observer = new IntersectionObserver((entry) => {
      entry.forEach((item) => {
        item.isIntersecting && item.target.classList.add(animation);
      });
    });

    if (elements) {
      elements.forEach((element) => {
        observer.observe(element);
      });
    }

    return () => {
      elements = '';
    };
  }, [tag, animation]);
}
export default useEntryScroll;
