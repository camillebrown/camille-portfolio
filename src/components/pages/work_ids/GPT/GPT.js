import React from 'react';

import '../project_detail.css';
import './gpt.css';
import { ColorPalette, ImgContainer, MainHeader } from './components';

export default function GPT({ selected_project }) {
  return (
    <div>
      <MainHeader selected_project={selected_project} />
      <ColorPalette selected_project={selected_project} />
      <ImgContainer selected_project={selected_project} />
    </div>
  );
}
