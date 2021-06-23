import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiPython, SiCss3, SiReact, SiNodeDotJs, SiFlask, SiHtml5, SiMongodb, SiPostgresql } from 'react-icons/si'

export const Skills = () => {
  let skills = [
      {
          name: "Javascript",
          icon: SiJavascript
      },
      {
          name: "Python",
          icon: SiPython
      },
      {
          name: "MongoDB",
          icon: SiMongodb
      },
      {
          name: "Node JS",
          icon: SiNodeDotJs
      },
      {
          name: "React JS",
          icon: SiReact
      },
      {
          name: "HTML 5",
          icon: SiHtml5
      },
      {
          name: "Flask",
          icon: SiFlask
      },
      {
          name: "CSS",
          icon: SiCss3
      },
      {
          name: "SQL",
          icon: FaDatabase
      },
      {
          name: "PostgreSQL",
          icon: SiPostgresql
      }
  ]

  const skillsDivs = skills.map((skill) =>
      <div className="single-skill">
          <skill.icon className="skills-icon" />
          <p>{skill.name}</p>
      </div>
  )

  return (
      <div className="skills-container">
          {skillsDivs}
      </div>
  )
}