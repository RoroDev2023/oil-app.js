import React from 'react'
import CargoShip from '../images/grant-durr-UPm28si8BRE-unsplash.jpg'
import OilImage from '../images/korie-jenkins-rVPxgFMFpdc-unsplash.jpg'

const Content = () => {  
    return (
        <>
            <section class="bg-gray-200">
                <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div class="font-light text-gray-900 sm:text-lg">
                        <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-gray-900">We Revolutionized The Industry</h2>
                        <p class="mb-4 mt-14">At True Holding LLC, we are more than just an oil and gas company. We are architects of energy, visionaries who understand that the world’s progress hinges on reliable, sustainable energy sources. Our journey began with a commitment to excellence, and today, we stand as a beacon of innovation and reliability in the industry.</p>
                        <p className=''>We are strategists, designers and developers. Innovators and problem solvers. Simple and quick.</p>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <img class="w-full rounded-lg border-gray-900 border-2" src={CargoShip} alt=" content 1"/>
                        <img class="mt-4 w-full lg:mt-10 rounded-lg border-gray-900 border-2" src={OilImage} alt=" content 1"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Content;