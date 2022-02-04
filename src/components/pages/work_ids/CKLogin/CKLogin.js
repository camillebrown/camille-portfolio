import React from 'react';

import '../project_detail.css';
import './ck-login.css';
import { ColorPalette, MainHeader } from './components';

export default function CKLogin({ selected_project }) {
  return (
    <div>
      <MainHeader selected_project={selected_project} />
      <ColorPalette selected_project={selected_project} />
    </div>
  );
}
