import React from 'react'
import ProjectCard from '../Projects/ProjectElements'

const Projects = () => {
    return (
            <div className="proj-wrapper">
                <ProjectCard>
                    <img className="proj-icon" src="https://i.ibb.co/NnffG5d/undraw-My-universe-re-txot.png" alt="Better App Icon"/>
                    <h2 className="proj-h2">Better.</h2>
                    <p className="proj-p">Adipisicing nostrud pariatur nostrud nulla aliqua commodo tempor magna irure voluptate sint nisi deserunt nulla. </p>
                </ProjectCard>
                <ProjectCard>
                    <img className="proj-icon" src="https://i.ibb.co/NyD3VV0/svg-1.png" alt="Cooking Icon"/>
                    <h2 className="proj-h2">Cookbook Curator</h2>
                    <p className="proj-p">Adipisicing nostrud pariatur nostrud nulla aliqua commodo tempor magna irure voluptate sint nisi deserunt nulla.</p>
                </ProjectCard>
                <ProjectCard>
                    <img className="proj-icon" src="https://i.ibb.co/3CNLs7P/svg-2.png" alt="Trivia Game Icon"/>
                    <h2 className="proj-h2">Got the Beat!</h2>
                    <p className="proj-p">Adipisicing nostrud pariatur nostrud nulla aliqua commodo tempor magna irure voluptate sint nisi deserunt nulla.</p>
                </ProjectCard>
            </div>
    )
}

export default Projects
