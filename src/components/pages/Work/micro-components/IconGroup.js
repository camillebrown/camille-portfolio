import React from 'react';
import { FaDatabase } from 'react-icons/fa';
import {
  SiJavascript,
  SiPython,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiPostgresql,
} from 'react-icons/si';

export default function IconGroup() {
  return (
    <div className='text-2xl text-normal-tan hidden lg:flex justify-between w-full max-w-[75%]'>
      <SiJavascript className='my-2' />
      <SiPython className='my-2' />
      <SiCss3 className='my-2' />
      <SiReact className='my-2' />
      <SiNodedotjs className='my-2' />
      <SiHtml5 className='my-2' />
      <SiPostgresql className='my-2' />
      <FaDatabase className='my-2' />
    </div>
  );
}
