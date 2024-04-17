import React from 'react';
import backgroundImage from '../images/maksym-kaharlytskyi-kDVaFjoQf4M-unsplash.jpg';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const FrontPage = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover bg-gray-400 bg-blend-multiply h-[93vh]" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="px-4 mx-auto max-w-screen-xl h-full text-left py-32">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl font-mono uppercase">Shipping.</h1>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl font-mono uppercase">Logistics.</h1>
          <h1 className="mb-4 text-4xl font-extrabold leading-none text-white md:text-5xl lg:text-6xl font-mono uppercase tracking-tight">Oil<span className="ml-5 tracking-tighter">Trading.</span></h1>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48" style={{ padding: 0 }}>Welcome to True Holding LLC, your reliable partner in logistics, ship chartering, and oil trading.</p>
        </div>
        <div className='flex flex-row rounded-sm mt-48 hidden md:flex'>
          <div className="flex flex-col mr-8">
            <Link to="/trading" className="bg-[#1E90FF] rounded-full py-1 px-3 cursor-pointer">
              <span className="text-white text-lg font-bold">Trading</span>
              <FontAwesomeIcon className='text-black text-xl cursor-pointer content-center self-center ml-2' icon={faCircleArrowRight} />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/about" className="bg-[#1E90FF] rounded-full py-1 px-3 cursor-pointer">
              <span className="text-white text-lg font-bold">About Us</span>
              <FontAwesomeIcon className='text-black text-xl cursor-pointer content-center self-center ml-2' icon={faCircleArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontPage;


