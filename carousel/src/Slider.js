import React, { useState } from 'react';
import './Slider.css';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
// import BtnSlider from './BtnSlide';
import data from './dataSlider';

export default function Slider() {
  const [image, setImage] = useState(data);
  return (
    <div className='container-slider'>
      {image.map((image) => {
        const { id, image_link, title } = image;
        return (
          <div className='slide' key={id}>
            <img src={image_link} alt={title} />
          </div>
        );
      })}

      <button className='btn-slide' onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  );
}
