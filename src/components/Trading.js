import React from 'react';
import backgroundImage from '../images/Trading.png';

function Trading() {
    return (
        <section className="relative bg-center bg-no-repeat bg-cover bg-gray-600 bg-blend-multiply h-[93vh]" style={{backgroundImage: `url(${backgroundImage})`}}>
          <div className="px-4 mx-auto max-w-screen-xl h-full text-left py-32">
            <div className='max-w-2xl'>
                <h3 className='text-red-500 text-2xl font-mono font-extrabold'>- Trading</h3>
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white mt-4">Get back to <span className='decoration-solid underline underline-offset-[11px] decoration-green-600'>growth </span> with our <span class="text-violet-600 dark:text-red-500">#1 Trading</span> services.</h1>
                <p class="text-lg font-normal lg:text-xl text-gray-200 mt-8">Our mission is to provide high-quality and cost-effective solutions for the transportation of goods and oil products across the Black and Caspian seas. We aim to deliver value to our customers, partners, and employees through our professionalism, integrity, and innovation.</p>
            </div>
            
          </div>
        </section>
      );
}

export default Trading