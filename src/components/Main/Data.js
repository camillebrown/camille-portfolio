import contact from '../../images/main/contact.png';
import portfolio from '../../images/main/portfolio.jpeg';

export const homeObjOne = {
  id: 'about',
  topLine: "Hi, I'm Camille",
  headline: 'Web developer based in Los Angeles, CA.',
  description:
    "I design websites with passion, creativity, and user experience in mind. With eye-catching pages that draw in your end users, you'll truly see your vision come to life!",
  buttonLabel: 'Learn More About Me',
  imgStart: false,
  img: portfolio,
  alt: 'Portfolio Image of Camille',
  page: '/about',
  classname: 'profile-pic',
};

export const homeObjTwo = {
  id: 'contact',
  topLine: 'Project in mind?',
  headline: "Let's work together!",
  buttonLabel: 'Contact Me',
  description:
    "I love working with new people and bringing ideas to life. Let's turn your dream into reality with a responsive and beautiful website. ",
  imgStart: false,
  img: contact,
  alt: 'Contact Illustration',
  page: '/contact',
  classname: '',
};
