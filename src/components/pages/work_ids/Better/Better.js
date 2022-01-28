import React from 'react';

import '../project_detail.css';
import './better.css';
import useEntryScroll from '../../../../hooks/useEntryScroll';
import { ColorPalette, ImgContainer, MainHeader } from './components';

export default function Better({ selected_project }) {
  useEntryScroll('.square', 'swing-in-top-fwd');
  useEntryScroll('.project-detail__img', 'swing-in-top-fwd');

  return (
    <>
      <MainHeader selected_project={selected_project} />
      <ColorPalette selected_project={selected_project} />
      <ImgContainer selected_project={selected_project} />
    </>
  );
}
