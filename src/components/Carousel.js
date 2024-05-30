import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Azerbaijan from '../NewImages/az-06-ai-brush-removebg-yj7e7jt5 (1).png'
import Russia from '../NewImages/RussiaMap.png'
import Turkey from '../NewImages/turkey-flag-map-removebg (1).png'
import UAE from '../NewImages/united-arab-emirates-flag-map-vector-design_939093-73-removebg (1).png'


const Carousel = () => {

  const dataSlider = [
    {
      image: Azerbaijan,
      country: 'Azerbaijan',
      color: '#ff0000',
      text: 'Located in the border of Europe and Asia, Azerbaijan plays a crucial role in the world of oil production. Not only is it historically known as an oil country, but it plays a big role in the operations of True Holding LLC.',
    },
    {
      image: Russia,
      country: 'Russia',
      color: '#00ff00',
      text: 'With a geographic position that transposes from Europe to the far east side of Europe, Russia is an important player in bridging the clients of oil.',
    },
    {
      image: Turkey,
      country: 'Turkey',
      color: '#0000ff',
      text: 'Known historically as a vital country for trade due to its location on the silk road, Turkey has retained the same characteristic throughout centuries, connecting Asia and Europe and bringing in clients from all over the world.',
    },
    {
      image: UAE,
      country: 'UAE',
      color: '#800080',
      text: 'Country known for its oil production, favourable environment for businesses and all around a high efficient country UAE is not only a country known around the world but also its the headquarters of True Holding LLC.',
    },
  ];

  const [slide, setSlide] = useState(0);
  const length = dataSlider.length;

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [slide]);

  return (
    <>
      <div className="bg-gray-200 h-[800px] flex items-center justify-center py-12"> 
        <div className="flex justify-center flex-col items-center align-center w-full mx-auto bg-gray-200 max-w-screen-xl mb-16">
          <hr className=" border-gray-800 w-full" />
          <h1 className='text-3xl mb-12 mt-16 font-extrabold uppercase'>- Our Service Area</h1>
          <div class="flex items-center justify-center">
          <FontAwesomeIcon onClick={prevSlide} className='absolute right-5 mr-64 text-black text-4xl cursor-pointer align-center hidden md:block align-middle text-center justify-center content-center ' icon={faCircleArrowRight} />
          <div class="flex items-center border border-gray-200 rounded-xl shadow flex-row max-w-3xl  bg-gray-800 hover:bg-gray-900 h-[550px] w-[800px]">
            <div class="flex flex-col justify-center p-4 leading-normal max-w-sm content-center text-center mx-auto">
              <div className="text-white mb-10 text-6xl font-black" style={{ color: 'white' }}>{dataSlider[slide].country}</div>
              <p class="mb-3 font-normal text-gray-400">{dataSlider[slide].text}</p>
            </div>
            {dataSlider.map((item, index) => (
              <div className={index === slide ? 'opacity-100' : 'opacity-0'} key={index}>
                {index === slide && (
                  <img
                    className='rounded-lg h-auto lg:w-[450px] p-4 md:w-[20px] md:h-auto transition duration-500 transform hover:scale-105'
                    src={item.image}
                    alt={`Slide ${index}`}
                  />
                )}
              </div>
            ))}
          </div>
          <FontAwesomeIcon onClick={nextSlide} className='absolute left-5 ml-64 text-4xl text-black cursor-pointer align-center hidden md:block align-middle text-center' icon={faCircleArrowLeft} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
