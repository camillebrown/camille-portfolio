import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import aperol from '../../../assets/images/about/aperol.png';
import cathedral from '../../../assets/images/about/cathedral.png';
import hike from '../../../assets/images/about/hike.jpg';
import piza from '../../../assets/images/about/piza.png';
import selfie from '../../../assets/images/about/selfie.jpg';

export default function Images() {
  const images = [
    {
      src: selfie,
      alt: 'camille-selfie',
      classname: 'rotate-4',
    },
    {
      src: aperol,
      alt: 'camille-in-italy',
      classname: '-rotate-6',
    },
    {
      src: cathedral,
      alt: 'camille-at-cathedral',
      classname: 'rotate-2',
    },
    {
      src: hike,
      alt: 'camille-on-a-hike',
      classname: 'rotate-3',
    },
    {
      src: piza,
      alt: 'camille-with-piza-tower',
      classname: '-rotate-6',
    },
  ];
  const [stackedImages, setStackedImages] = useState(images);

  useEffect(() => {
    const timer = setInterval(() => {
      setStackedImages((prevImages) => {
        const nextImages = [...prevImages];
        const topImage = nextImages.shift();
        nextImages.push(topImage);
        return nextImages;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="w-full mx-10 md:mx-auto md:w-[90%] flex justify-between inline-block mxl:hidden md:mt-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={classNames("w-40 h-60 mxl:h-96 object-cover", {'hidden lg:inline-block' : index !== 0})}
          />
        ))}
      </div>
      <div className="hidden mxl:inline-block">
        {stackedImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={classNames(
              'absolute top-10 left-28 transform -translate-x-1/2 w-[17rem] h-96 object-cover',
              index === 0 ? 'z-20' : 'z-10',
              image.classname
            )}
          />
        ))}
      </div>
    </>
  );
}
