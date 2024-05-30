import React from 'react';
import { faEarthAmericas, faOilWell, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Feature() {
  return (
    <section className="bg-gray-100 py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900">Our Focus</h2>
          <p className="text-gray-600 text-lg mt-8">
            At True Holding LLC, we excel in providing swift and efficient shipping, trading, and lucrative ventures in the oil, gas, and logistics sectors.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faOilWell} className="text-3xl text-blue-600 rounded-full p-2 bg-blue-200 border-blue-500 border-4" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Oil and Gas</h3>
            <p className="text-gray-600 text-center">
              True Holding LLC operates at the heart of the UAE, serving clients worldwide with high-quality oil and gas products.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faEarthAmericas} className="text-3xl text-red-600 rounded-full p-2 bg-red-200 border-red-500 border-4"/>
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Global Reach</h3>
            <p className="text-gray-600 text-center">
              Our reach spans from the Middle East to bustling metropolises, connecting suppliers and consumers across continents.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faBriefcase} className="text-3xl text-yellow-600 rounded-full p-2 bg-yellow-200 border-yellow-500 border-4" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Variety of Products</h3>
            <p className="text-gray-600 text-center">
              Our portfolio includes crude oil, refined petroleum products, LNG, and specialty gases, ensuring quality and reliability in every product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;


// {/* <div>
//     <FontAwesomeIcon icon={faEarthAmericas} className="text-3xl mb-6 text-red-600 rounded-full p-2 bg-red-200 border-red-500 border-4"/>
//     <h3 class="mb-2 text-xl font-bold ">•  Global Reach</h3>
//     <p class="text-gray-500">From the deserts of the Middle East to bustling metropolises, our reach knows no bounds. We connect suppliers and consumers across continents, ensuring seamless trade.</p>
// </div> */}