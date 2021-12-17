import { useState, useEffect } from 'react';

function useTabs() {
  let tabs = document.getElementsByClassName('tab-title');
  let tabs_content = document.getElementsByClassName('tab-content');

  const [tabTitles, setTabTitles] = useState(null);
  const [content, setContent] = useState(null);

  const deactvateAllTabs = function () {
    tabTitles.forEach(function (tab) {
      tab.classList.remove('is-active');
    });
  };

  const hideTabsContent = function () {
    content.forEach(function (content) {
      content.classList.remove('is-active');
    });
  };

  const activateTabsContent = function (tab) {
    content.forEach(function (item) {
      if (tab.innerText.toLowerCase() === item.id) {
        item.classList.add('is-active');
      }
    });
  };

  useEffect(() => {
    setTabTitles([...tabs])
    setContent([...tabs_content])
  }, [tabs, tabs_content]);

  return {
    tabTitles,
    setTabTitles,
    content,
    setContent,
    deactvateAllTabs,
    hideTabsContent,
    activateTabsContent,
  };
}

export default useTabs;
