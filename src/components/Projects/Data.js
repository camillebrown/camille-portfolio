import { FaDatabase } from 'react-icons/fa';
import {
  SiJavascript,
  SiPython,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiFlask,
  SiHtml5,
  SiPostgresql,
} from 'react-icons/si';

import apga from '../../images/work/apga-home.png';
import banddeux from '../../images/work/banddeux-home.png';
import beat from '../../images/work/gotthebeat-home.png';
import better from '../../images/work/better-home.png';
import cookbook from '../../images/work/cookbook-home.png';
import gpt from '../../images/work/gpt-home.png';
import squarespace from '../../images/work/squarespace.png';

export const projects = [
  {
    id: 'better',
    title: 'Better.',
    description:
      'Track your daily fitness activity, moods, sleep patterns, and meals over time.',
    git: '//www.github.com/camillebrown/Better-frontend',
    url: '//better-you-app.herokuapp.com/',
    img: better,
    alt: 'Better. Home Page',
    page: '/work/better',
    label: 'Better App',
    langs: [
      {
        name: 'Javascript',
        icon: SiJavascript,
      },
      {
        name: 'Python',
        icon: SiPython,
      },
      {
        name: 'React JS',
        icon: SiReact,
      },
      {
        name: 'Flask',
        icon: SiFlask,
      },
    ],
  },
  {
    id: 'cookbook-curator',
    title: 'Cookbook Curator',
    description:
      'Find and create recipes to build your own personalized cookbook.',
    git: '//www.github.com/camillebrown/CookbookCurator',
    url: '//cookbook-curator.herokuapp.com/',
    img: cookbook,
    alt: 'Cookbook Curator Home Page',
    page: '/work/cookbook-curator',
    label: 'Cookbook Curator App',
    langs: [
      {
        name: 'Node',
        icon: SiNodedotjs,
      },
      {
        name: 'SQL',
        icon: FaDatabase,
      },
      {
        name: 'CSS',
        icon: SiCss3,
      },
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
      },
    ],
  },
  {
    id: 'got-the-beat',
    title: 'Got the Beat!',
    description:
      'Test your music industry knowledge with this trivia fun and challenging game.',
    git: '//www.github.com/camillebrown/GOT-THE-BEAT-GAME',
    url: '//camillebrown.github.io/GOT-THE-BEAT-GAME/',
    img: beat,
    alt: 'Got the Beat Home Page',
    page: '/work/got-the-beat',
    label: 'Got the Beat App',
    langs: [
      {
        name: 'HTML',
        icon: SiHtml5,
      },
      {
        name: 'Javascript',
        icon: SiJavascript,
      },
      {
        name: 'CSS',
        icon: SiCss3,
      },
    ],
  },
  {
    id: 'apga',
    title: 'APGA Foundation',
    description:
      'The APGA Foundation provides underserved youth with the knowledge and opportunity to grow into healthy and independent adults.',
    git: null,
    url: '//advocatesfoundation.org/',
    img: apga,
    alt: 'APGA Foundation Home Page',
    page: '/work/apga',
    label: 'APGA Foundation Site',
    squarespace: squarespace,
  },
  {
    id: 'gpt',
    title: 'GPT-3 Responsive',
    description:
      'The GPT-3 Responsive site was created to practice fully responsive UI/UX design & recreation and soft animations with complex gradients.',
    git: '//www.github.com/camillebrown/gpt3-responsive',
    url: '//gpt-template-redesign.netlify.app/',
    img: gpt,
    alt: 'GPT-3 Responsive Home Page',
    page: '/work/gpt',
    label: 'GPT-3 Responsive Site',
    langs: [
      {
        name: 'Javascript',
        icon: SiJavascript,
      },
      {
        name: 'CSS',
        icon: SiCss3,
      },
    ],
  },
  {
    id: 'banddeux',
    title: 'The Banddeux',
    description:
      'The Banndeux is a creative collective focused on creating and building community & partnerships.',
    git: null,
    url: '//www.thebanddeux.com/',
    img: banddeux,
    alt: 'The Banndeux Home Page',
    page: '/work/banddeux',
    label: 'The Banndeux Site',
    squarespace: squarespace,
  },
];
