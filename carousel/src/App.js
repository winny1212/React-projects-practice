import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import data from './dataSlider';
import './Slider.css';

function App() {
  const [image, setImage] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = image.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, image]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>About
        </h2>
      </div>
      <div className='section-center'>
        {image.map((image, imageIndex) => {
          const { id, image_link, title } = image;

          let position = 'nextSlide';
          if (imageIndex === index) {
            position = 'activeSlide';
          }
          if (
            imageIndex === index - 1 ||
            (index === 0 && imageIndex === image.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image_link} alt={title} className='person-img' />

              <p className='title'>{title}</p>
              {/* <p className="text">{quote}</p> */}
            </article>
          );
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
      <div className='para'>
        <p>
          Welcome to the Notting Hill Community Dog Blog! We are Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dicta, ullam minima.
          Maiores nisi iste sit necessitatibus officiis cumque distinctio
          accusamus nesciunt asperiores dolore iusto inventore fugit ut
          quisquam, modi saepe. Labore perferendis rem minus eius excepturi
          aliquam eos, adipisci iure vel sunt odit, eaque qui laboriosam. Rem
          inventore sunt sequi tempora dignissimos, debitis eligendi iste soluta
          autem quasi explicabo excepturi. Consectetur laborum ex non minus
          commodi doloremque dolores unde molestiae inventore? Ratione quidem
          similique veritatis debitis consequatur maxime doloribus nemo itaque
          aperiam quisquam magni, provident cumque sed beatae rem! Veritatis.
          Voluptates sit commodi, porro ad quod in eum nobis totam soluta
          aspernatur magni dicta laudantium debitis tenetur magnam adipisci, cum
          fugiat perspiciatis voluptatum veritatis illo fugit dolore. Culpa,
          dolorum magni. Sapiente deleniti voluptates officia nemo culpa dolor
          at enim, corrupti facilis! Voluptas illum eius exercitationem
          molestias, pariatur expedita voluptates hic error voluptatem, nesciunt
          reiciendis dicta fugit. Ex doloribus corrupti voluptas.
        </p>
      </div>
    </section>
  );
}

export default App;
