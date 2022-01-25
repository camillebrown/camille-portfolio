import React, { useState } from 'react';
import classnames from 'classnames';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import './projects.css';
import ProjectDiv from './project-div/ProjectDiv';
import useEntryScroll from '../../../hooks/useEntryScroll';
import useTabs from '../../../hooks/useTabs';

const Projects = () => {
  const { tabTitles, deactvateAllTabs, hideTabsContent, activateTabsContent } =
    useTabs();

  useEntryScroll(document.querySelector('#work'));

  const navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  tabTitles?.forEach(function (tab) {
    tab.addEventListener('click', function () {
      deactvateAllTabs();
      hideTabsContent();
      tab.classList.add('is-active');
      activateTabsContent(tab);
    });
  });

  return (
    <div className="projects section__padding" id="work">
      <div className="projects-heading">
        <h1>Projects</h1>
        <div
          className="projects-heading_btn"
          onClick={() => routeChange('/work')}
        >
          <div
            className="projects-heading_btn-content"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            <span>See All</span>
            <div className="arrow_div">
              <BsArrowRight
                className={classnames('see-more', { active: hover })}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="projects_tabs-container">
        <div className="tabs is-centered is-small">
          <ul>
            <li className="is-active tab-title">
              <p>All</p>
            </li>
            <li className="tab-title">
              <p>Javascript</p>
            </li>
            <li className="tab-title">
              <p>Python</p>
            </li>
            <li className="tab-title">
              <p>CSS</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="projects_content-container">
            <section id="all" className="is-active tab-content">
              <div className="projects_tab-content_flexbox">
                <ProjectDiv tag="all" />
              </div>
            </section>
            <section id="javascript" className="tab-content">
              <div className="projects_tab-content_flexbox">
                <ProjectDiv tag="js" />
              </div>
            </section>
            <section id="python" className="tab-content">
              <div className="projects_tab-content_flexbox">
                <ProjectDiv tag="python" />
              </div>
            </section>
            <section id="css" className="tab-content">
              <div className="projects_tab-content_flexbox">
                <ProjectDiv tag="css" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
