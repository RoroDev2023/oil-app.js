import React from 'react';
import backgroundImage from '../images/maksym-kaharlytskyi-kDVaFjoQf4M-unsplash.jpg';
import {faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const FrontPage = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover bg-gray-400 bg-blend-multiply h-[93vh]" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="px-4 mx-auto max-w-screen-xl h-full text-left py-32 animate-fadeIn">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl font-mono uppercase animate-slideIn slideIn-delay1">Shipping.</h1>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl font-mono uppercase animate-slideIn slideIn-delay2">Logistics.</h1>
          <h1 className="mb-4 text-4xl font-extrabold leading-none text-white md:text-5xl lg:text-6xl font-mono uppercase tracking-tight animate-slideIn slideIn-delay3">Oil<span className="ml-5 tracking-tighter">Trading.</span></h1>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48" style={{ padding: 0 }}>Welcome to True Holding LLC, your reliable partner in logistics, ship chartering, and oil trading.</p>
        </div>
        <div className="flex flex-row mt-28 space-x-6">
            <Link to="/trading" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-200 shadow-lg">
              Trading
              <FontAwesomeIcon className='text-white text-xl ml-2' icon={faCircleArrowRight} />
            </Link>
            <Link to="/about" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-200 shadow-lg">
              About Us
              <FontAwesomeIcon className='text-white text-xl ml-2' icon={faCircleArrowRight} />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default FrontPage;


