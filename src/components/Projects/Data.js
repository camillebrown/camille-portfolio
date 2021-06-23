import { FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiPython, SiCss3, SiReact, SiNodeDotJs, SiFlask, SiHtml5, SiPostgresql } from 'react-icons/si'

export const projects = [
    {
        id: 'better',
        title: 'Better.',
        description: 'Track your daily fitness activity, moods, sleep patterns, and meals over time.',
        git: "//www.github.com/camillebrown/Better-frontend",
        url: "//better-you-app.herokuapp.com/",
        img: "https://i.ibb.co/QPRMHT7/better-home.png",
        alt: 'Better. Home Page',
        page: '/work/better',
        label: 'Better App',
        langs: [
            {
                name: "Javascript",
                icon: SiJavascript
            },
            {
                name: "Python",
                icon: SiPython
            },
            {
                name: "React JS",
                icon: SiReact
            },
            {
                name: "Flask",
                icon: SiFlask
            }
        ]
    },
    {
        id: 'cookbook-curator',
        title: 'Cookbook Curator',
        description: 'Find and create recipes to build your own personalized cookbook.',
        git: "//www.github.com/camillebrown/CookbookCurator",
        url: "//cookbook-curator.herokuapp.com/",
        img: "https://i.ibb.co/JmjFbF0/cookbook-home.png",
        alt: 'Cookbook Curator Home Page',
        page: '/work/cookbook-curator',
        label: 'Cookbook Curator App',
        langs: [
            {
                name: "Node",
                icon: SiNodeDotJs
            },
            {
                name: "SQL",
                icon: FaDatabase
            },
            {
                name: "CSS",
                icon: SiCss3
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql
            }
        ]
    },
    {
        id: 'got-the-beat',
        title: 'Got the Beat!',
        description: 'Test your music industry knowledge with this trivia fun and challenging game.',
        git: "//www.github.com/camillebrown/GOT-THE-BEAT-GAME",
        url: "//camillebrown.github.io/GOT-THE-BEAT-GAME/",
        img: "https://i.ibb.co/k4fLXM5/gotthebeat-home.png",
        alt: 'Got the Beat Home Page',
        page: '/work/got-the-beat',
        label: 'Got the Beat App',
        langs: [
            {
                name: "HTML",
                icon: SiHtml5
            },
            {
                name: "Javascript",
                icon: SiJavascript
            },
            {
                name: "CSS",
                icon: SiCss3
            }
        ]
    }
]
