import React from 'react';
import backgroundImage from '../images/ey-aerial-panoramic-view-of-logistics-and-transportation.jpg'

function About() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 overflow-hidden bg-cover bg-center h-[93vh]" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center ">

          <div className="max-w-screen-xl px-4 py-8 mx-auto xl:px-16 md:grid md:grid-cols-2 gap-8 sm:py-16 lg:px-6 bg-[#111111] rounded-3xl justify-center mt-32 flex content-center text-center">
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-6xl font-extrabold text-white tracking-tight mx-auto">About Us</h2>
              <p className="mb-6 text-lg font-light text-gray-300 md:text-lg mt-12 text-left">True Holding envisions a world where energy powers progress, sustains communities, and fosters prosperity. We strive to be at the forefront of this transformation. Our long-term goals include sustainable growth, customer satisfaction, and technological innovation.</p>
            </div>
            <img className="w-[1000px] hidden dark:block rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

