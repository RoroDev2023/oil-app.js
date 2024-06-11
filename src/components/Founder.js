import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faArrowTrendUp, faUserTie } from '@fortawesome/free-solid-svg-icons';
import FounderImg from '../images/Founder.webp';
import EmployeeImg from '../images/pngtree-working-employee-3d-character-illustration-png-image_11549018.png'
import { ReactComponent as VectorImg } from '../images/611bce9c23d78268a9be172b_vector-over-yellow.svg'; // Assuming the SVG is imported as a React component

const Founder = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center h-auto md:h-[71vh] relative">
          <h2 className="text-6xl font-bold text-gray-900 mb-8 mt-16">
            Meet Our Founder, <span className='font-alexbrush font-extrabold text-7xl text-blue-500'>Orxan.</span>
          </h2>
          <div className="relative inline-block">
            <svg
              className="w-10 h-10 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote className="mt-8 text-2xl italic font-medium text-gray-900 bg-gray-300 p-6 rounded-lg">
              "Orxan, a seasoned entrepreneur with an illustrious track record, leads True Holding LLC. His expertise spans decades, and his portfolio includes ownership of multiple billion-dollar revenue-generating companies. Orxan’s vision drives our mission: to redefine the energy landscape and empower global progress."
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3 mt-12">
              <img
                className="w-10 h-10 rounded-full bg-gray-400"
                src={EmployeeImg}
                alt="profile"
              />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
                <cite className="pe-3 font-medium text-gray-900 dark:text-white"></cite>
                <cite className="ps-3 text-sm text-gray-600">Employee at True Holding LLC</cite>
              </div>
            </figcaption>
          </div>
        </div>

        <VectorImg
         className="absolute right-0 top-36 hidden lg:block"
         style={{ width: '500px', height: 'auto', transform: 'rotate(40deg)' }} // Apply custom rotation
       />

        <div className="bg-gray-600 h-0.5 w-full rounded-full mb-16 sm: mt-8"></div>

        <h2 className="text-5xl font-extrabold text-gray-900 text-center font-serif mb-16">
          Commitments & Future Goals
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center mb-24 space-y-16 lg:space-y-0 lg:space-x-12">
          <img
            className="bg-gray-300 rounded-full p-20 text-xl hidden lg:block"
            src={FounderImg}
            alt="Founder"
          />
          <div className="flex flex-col space-y-16">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faTree}
                className="text-3xl text-green-700 bg-green-200 p-2 rounded-full border-green-600 border-4"
              />
              <div>
                <h3 className="text-xl font-bold">• Sustainability</h3>
                <p className="text-gray-500">
                  True Holding LLC embraces sustainable practices. We explore innovative solutions, from cleaner
                  fuels to carbon capture technologies, contributing to a greener planet.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faArrowTrendUp}
                className="text-3xl text-orange-600 bg-orange-200 p-2 rounded-full border-orange-500 border-4"
              />
              <div>
                <h3 className="text-xl font-bold">• Strategic Advantage</h3>
                <p className="text-gray-500">
                  Our headquarters in the UAE provides a strategic edge. Efficient logistics, seamless operations, and a
                  robust network position us for success.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faUserTie}
                className="text-3xl text-gray-600 bg-gray-200 p-2 rounded-full border-gray-500 border-4"
              />
              <div>
                <h3 className="text-xl font-bold">• Industry Leadership</h3>
                <p className="text-gray-500">
                  We don’t just follow trends; we set them. True Holding aims to shape the future of energy, driving
                  industry standards and fostering progress.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-600 h-0.5 w-full rounded-full my-16"></div>

        <div className="text-center mt-16">
          <h2 className="text-5xl font-extrabold text-gray-900 font-serif mb-12">Contact Us</h2>
          <p className="text-xl text-gray-700 mb-16">
            For inquiries, partnerships, or collaboration, reach out to us at{' '}
            <span className="font-extrabold text-gray-900">info@trueholdingllc.com</span>. Let's build a brighter,
            more energy-efficient future together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;


