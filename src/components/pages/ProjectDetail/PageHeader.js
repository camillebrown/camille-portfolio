import React from 'react';
import classnames from 'classnames';

export default function PageHeader({ project }) {
  return (
    <div
      className={classnames(
        'relative w-full md:w-[85%] h-half-screen xs:h-70-screen md:h-90-screen m-auto transition-transform duration-1000 slide-in-top mt-0 overflow-hidden flex justify-center',
        !project ? 'items-center' : 'items-end',
        project?.headerColor,
        project?.headerTextColor
      )}
    >
      {!project ? (
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      ) : (
        <p
          className={classnames(
            'w-full font-dream-ave uppercase whitespace-nowrap transition-transform duration-1000 delay-1000 slide-in-bottom text-center',
            project?.customFontSize
          )}
        >
          {project?.title}
        </p>
      )}
    </div>
  );
}
