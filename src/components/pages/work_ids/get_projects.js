import { projects } from '../../../assets/project_data';

export default function GetProjects(id) {
  let next = '';
  let previous = '';
  const ids = projects.map((proj) => proj.id);

  const getPrevious = () => {
    if (id === ids[0]) {
      previous = projects.find((proj) => proj.id === ids[ids.length - 1]);
    } else {
      previous = projects.find((proj) => proj.id === ids[ids.indexOf(id) - 1]);
    }
  };

  const getNext = () => {
    if (id === ids[ids.length - 1]) {
      next = projects.find((proj) => proj.id === ids[0]);
    } else {
      next = projects.find((proj) => proj.id === ids[ids.indexOf(id) + 1]);
    }
  };

  getPrevious(id);
  getNext(id);

  return {
    next,
    previous,
  };
}
