import React from 'react';

export default function AppTypeDetail() {
  const appTypes = [
    'CRUD Web Applications',
    'API-Connected Applications',
    'Practice Replica Sites',
    'Contract Web Design',
  ];
  return (
    <ul className="hidden sm:block uppercase font-gotham-light text-white text-xxs tracking-ultra-wide xl:tracking-stretch list-outside list-none relative dash-style my-4">
      {appTypes.map((t, idx) => {
        return (
          <div key={idx} className='flex items-center my-2'>
            <hr className="w-6 xl:w-14 ml-2 xl:ml-8 mr-2 xl:mr-6 text-white" />
            <li className=''>{t}</li>
          </div>
        );
      })}
    </ul>
  );
}
