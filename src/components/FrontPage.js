import React from 'react';
import backgroundImage from '../images/maksym-kaharlytskyi-kDVaFjoQf4M-unsplash.jpg';
import backgroundImage2 from '../images/ey-aerial-panoramic-view-of-logistics-and-transportation.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeIcon from 'react-fontawesome';
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const FrontPage = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover bg-gray-400 bg-blend-multiply h-[93vh]" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="px-4 mx-auto max-w-screen-xl h-full text-left py-32">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl font-mono uppercase">Shipping.</h1>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl font-mono uppercase">Logistics.</h1>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl font-mono uppercase">Oil Trading.</h1>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48" style={{ padding: 0 }}>Welcome to True Holding LLC, your reliable partner in logistics, ship chartering, and oil trading.</p>
        </div>
        <div className='h-52 w-[430px] bg-[#1E90FF] flex flex-row justify-evenly rounded-sm mt-16'>
          <div className="flex flex-col items-start mt-12">
            <span className="text-white text-lg font-bold">Shipping</span>
            <span className="text-white text-md font-bold mt-8">Learn more</span>
            <FontAwesomeIcon icon={faXTwitter} className="mr-1 text-white h-8 w-8 " />
          </div>
          <div className="flex flex-col items-start mt-12">
            <span className="text-white text-lg font-bold">Trading</span>
            <span className="text-white text-md font-bold mt-8">Learn more</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontPage;
