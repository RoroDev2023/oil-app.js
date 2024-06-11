import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Azerbaijan from '../NewImages/az-06-ai-brush-removebg-yj7e7jt5 (1).png';
import Russia from '../NewImages/RussiaMap.png';
import Turkey from '../NewImages/turkey-flag-map-removebg (1).png';
import UAE from '../NewImages/united-arab-emirates-flag-map-vector-design_939093-73-removebg (1).png';

const Carousel = () => {
  const dataSlider = [
    {
      image: Azerbaijan,
      country: 'Azerbaijan',
      text: 'Situated at the crossroads of Eastern Europe and Western Asia, Azerbaijan holds a significant position in global oil production. Historically renowned as an oil-rich nation, Azerbaijan plays a vital role in the operations of True Holding LLC, contributing to our strategic growth and influence in the industry.',
    },
    {
      image: Russia,
      country: 'Russia',
      text: 'Spanning across Europe and Asia, Russia is a pivotal player in the global oil market. Its vast geographic expanse and rich natural resources make it a crucial bridge for our clients. At True Holding LLC, we leverage Russia’s strategic importance to facilitate seamless oil trade and foster robust client relationships.',
    },
    {
      image: Turkey,
      country: 'Turkey',
      text: 'Historically known as a vital trade hub due to its strategic location on the Silk Road, Turkey continues to be a key player in connecting Asia and Europe. At True Holding LLC, we utilize Turkey’s unique position to attract clients from around the globe, ensuring efficient and effective operations.',
    },
    {
      image: UAE,
      country: 'UAE',
      text: 'The UAE is globally recognized for its significant oil production, business-friendly environment, and high efficiency. As the headquarters of True Holding LLC, the UAE provides an optimal base for our operations, allowing us to thrive in a dynamic and supportive business landscape.',
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
        <div className="flex justify-center flex-col items-center w-full mx-auto max-w-screen-xl mb-16">
          <hr className=" border-gray-800 w-full" />
          <h1 className='text-3xl mb-12 mt-16 font-extrabold uppercase'>- Our Service Area</h1>
          <div className="flex items-center justify-center p-8">
            <FontAwesomeIcon onClick={prevSlide} className='absolute right-5 mr-64 text-gray-800 text-4xl cursor-pointer hidden md:block' icon={faCircleArrowRight} />
            <div className="relative flex items-center border border-gray-200 rounded-xl shadow-lg flex-row max-w-3xl md:max-w-4xl bg-gray-800 hover:bg-gray-900 h-auto md:h-[550px] w-full md:w-[800px] overflow-hidden">
              <div className="flex flex-col justify-center p-4 leading-normal text-center mx-auto md:max-w-xs">
                <div className="text-white my-6 md:mb-10 font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{dataSlider[slide].country}</div>
                <p className="mb-3 font-normal text-gray-300 sm:mb-1 md:mb-1 max-w-lg">{dataSlider[slide].text}</p>
              </div>
              {dataSlider.map((item, index) => (
                <div className={index === slide ? 'opacity-100' : 'opacity-0'} key={index}>
                  {index === slide && (
                    <img
                      className='rounded-lg h-auto w-full max-w-[450px] p-4 transition duration-500 transform hover:scale-105'
                      src={item.image}
                      alt={`Slide ${index}`}
                    />
                  )}
                </div>
              ))}
            </div>
            <FontAwesomeIcon onClick={nextSlide} className='absolute left-5 ml-64 text-4xl text-gray-800 cursor-pointer hidden md:block' icon={faCircleArrowLeft} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;




