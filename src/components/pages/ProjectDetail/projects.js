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

import apga from '../../../assets/images/work/apga-home.png';
import banddeux from '../../../assets/images/work/banddeux-home.png';
import beat from '../../../assets/images/work/gotthebeat-home.png';
import better from '../../../assets/images/work/better-home.png';
import cookbook from '../../../assets/images/work/cookbook-home.png';
import gpt from '../../../assets/images/work/gpt-home.png';
import squarespace from '../../../assets/images/work/squarespace.png';

export const getProject = (path) => {
  return projects.find((p) => p.page === path);
};

export const projects = [
  {
    id: 'better',
    title: 'Better.',
    customFontSize: 'leading-[7rem] text-heading-fluid md:leading-none md:text-9xl',
    type: 'web application',
    headerColor: 'bg-rust',
    headerTextColor: 'text-base-tan',
    buttonColor: 'xs:bg-base-tan',
    figma: (
      <iframe
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FNYaHn4GiOgXZud07yDWa39%2FBetter.-App%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3Dma2BwPM136x43aRs-1"
        allowfullscreen
        className="border border-deep-gray w-4/5 h-full mx-auto"
        title="better-figma"
      />
    ),
    description:
      'Track your daily fitness activity, moods, sleep patterns, and meals over time.',
    longDescription:
      'The goal of this project was to make a full API-Connected, CRUD Web Application including user creation and authentication.',
    git: '//www.github.com/camillebrown/Better-frontend',
    url: '//better-you-app.herokuapp.com/',
    img: better,
    tags: [
      'User Stories',
      'Wireframes',
      'External API',
      'Authentication',
      'CRUD',
      'Charting & Diagrams',
    ],
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
    customFontSize: 'text-mid-fluid xs:text-5xl sm:text-6xl md:text-mid-fluid xl:text-8xl',
    type: 'web application',
    headerColor: 'bg-sage',
    headerTextColor: 'text-deep-gray',
    buttonColor: 'xs:bg-base-tan',
    description:
      'Search thousands of recipes and create your own to build a personalized cookbook.',
    longDescription:
      'The goal of this project was to make a full API-Connected, CRUD Web Application including user creation and authentication. Using the Spoonacular API, users search thousands of online recipes and also create their own.',
    git: '//www.github.com/camillebrown/CookbookCurator',
    url: '//cookbook-curator.herokuapp.com/',
    img: cookbook,
    tags: [
      'User Stories',
      'Wireframes',
      'External API',
      'Authentication',
      'CRUD',
      'Node/Express',
      'Database Configuration',
    ],
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
    customFontSize: 'text-mobile-fluid sm:text-8xl lg:text-9xl',
    type: 'web game application',
    headerColor: 'bg-dark-blue',
    headerTextColor: 'text-white',
    buttonColor: 'xs:bg-white',
    description:
      'Test your music industry knowledge with this trivia fun and challenging game.',
    longDescription:
      'The goal of this project was to make a game style web application. This trivia game includes 3 multiple choice rounds: General Music Trivia, Finish the Lyrics and Guess the Artist',
    git: '//www.github.com/camillebrown/GOT-THE-BEAT-GAME',
    url: '//camillebrown.github.io/GOT-THE-BEAT-GAME/',
    img: beat,
    tags: [
      'User Stories',
      'Wireframes',
      'JS DOM Manipulation',
      'Score Keeping',
      'Timer Functionality',
    ],
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
    customFontSize: 'text-mobile-fluid sm:text-7xl lg:text-8xl mxl:text-9xl',
    type: 'custom website',
    headerColor: 'bg-rust',
    headerTextColor: 'text-base-tan',
    buttonColor: 'xs:bg-base-tan',
    description:
      'Provide underserved youth with the knowledge and opportunity to become golf-loving young adults.',
    longDescription:
      'The client wanted a revamped and brightly colored site to attract new youth members for their programs. Custom graphics were created and donation collection ability was added.',
    git: null,
    url: '//advocatesfoundation.org/',
    img: apga,
    tags: [
      'Web Design',
      'Site Development',
      'Squarespace',
      'Client Management',
      'SEO Optimization',
    ],
    alt: 'APGA Foundation Home Page',
    page: '/work/apga',
    label: 'APGA Foundation Site',
    squarespace: squarespace,
  },
  {
    id: 'gpt',
    title: 'GPT-3 Responsive',
    customFontSize: 'text-mobile-fluid sm:text-7xl lg:text-8xl mxl:text-9xl',
    type: 'replica website',
    headerColor: 'bg-dark-blue',
    headerTextColor: 'text-white',
    buttonColor: 'xs:bg-white',
    description:
      'Using responsive UI/UX design, replicate a complex multi-page site with soft animations with complex gradients.',
    longDescription:
      'The goal of this project was to practice fully responsive design, understand and replicate an existing complex site and learn about animations, gradients and minor parallax scrolling.',
    git: '//www.github.com/camillebrown/gpt3-responsive',
    url: '//gpt-template-redesign.netlify.app/',
    img: gpt,
    tags: [
      'React Functional Components',
      'CSS Fundamentals',
      'Media Queries',
      'Animations & Gradients',
      'Site Replication',
      'Deployment',
    ],
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
    customFontSize: 'text-mobile-fluid sm:text-7xl lg:text-8xl xl:text-9xl',
    type: 'custom website',
    headerColor: 'bg-deep-gray',
    headerTextColor: 'text-base-tan',
    buttonColor: 'xs:bg-base-tan',
    description:
      'The Banddeux is a creative collective focused on creating and building community & partnerships.',
    longDescription:
      'The client wanted a visually stimulating, magazine style site to build a community following. The web design highlights events and information for the Banddeux and its founders.',
    git: null,
    url: '//www.thebanddeux.com/',
    img: banddeux,
    tags: [
      'Web Design',
      'Site Development',
      'Squarespace',
      'Client Management',
      'SEO Optimization',
    ],
    alt: 'The Banndeux Home Page',
    page: '/work/banddeux',
    label: 'The Banndeux Site',
    squarespace: squarespace,
  },
];
