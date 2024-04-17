import React from 'react'
import { faEarthAmericas, faOilCan } from '@fortawesome/free-solid-svg-icons'
import { faOilWell } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Feature() {
  return (
    <div>
        <section class="bg-white">
            <div class="py-16 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
                <div class="max-w-screen-md mb-8 lg:mb-16">
                    <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Focus</h2>
                    <p class="text-gray-500 sm:text-xl dark:text-gray-400 mt-8">Here at True Holding LLC we focus on providing quick and efficient shipping, trading and lucrative ventures in the world of Oil, Gas, and Logistics.</p>
                </div>
                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-28 mb-8">
                    <div>
                        <FontAwesomeIcon icon={faOilWell} className="text-3xl mb-6 text-blue-600 rounded-full p-2 bg-blue-200 border-blue-500 border-4" />
                        <h3 class="mb-2 text-xl font-bold ">•  Oil and Gas</h3>
                        <p class="text-gray-500 dark:text-gray-400">True Holding LLC operates at the heart of the United Arab Emirates, strategically positioned to serve clients worldwide. We specialize in the supply of high-quality oil and gas products.</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEarthAmericas} className="text-3xl mb-6 text-red-600 rounded-full p-2 bg-red-200 border-red-500 border-4"/>
                        <h3 class="mb-2 text-xl font-bold ">•  Global Reach</h3>
                        <p class="text-gray-500 dark:text-gray-400">From the deserts of the Middle East to bustling metropolises, our reach knows no bounds. We connect suppliers and consumers across continents, ensuring seamless trade.</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBriefcase} className="text-3xl mb-6 text-yellow-600 rounded-full p-2 bg-yellow-100 border-yellow-500 border-4" />
                        <h3 class="mb-2 text-xl font-bold ">•  Variety of Products</h3>
                        <p class="text-gray-500 dark:text-gray-400">Our portfolio includes crude oil, refined petroleum products, liquefied natural gas (LNG), and specialty gases. Quality and reliability define every product we offer.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Feature