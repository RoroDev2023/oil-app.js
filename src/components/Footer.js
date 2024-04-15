import React from 'react';
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
        
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-between mt-16 mb-16">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 max-w-xs">
            <div className="flex items-center mb-4 space-x-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
              <div>
                <span className="block font-semibold uppercase text-sm">Full Address</span>
                <span className='text-gray-400 text-sm'>Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E.</span>
              </div>
            </div>
            <div className="flex items-center mb-4 space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-2xl" />
              <div>
                <span className="block font-semibold uppercase text-sm">Phone Number</span>
                <span className='text-gray-400 text-sm'>+971 58 567 108</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
              <div>
                <span className="block font-semibold uppercase text-sm">Email Address</span>
                <span className='text-gray-400 text-sm'>info@trueholdingllc.com</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
              <div>
                <h2 className="text-sm font-semibold mb-4 uppercase">Navigation</h2>
                <ul className="text-gray-400">
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-200">Home</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-200">Trading</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-200">Shipping</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-semibold mb-4 uppercase">Follow us</h2>
                <ul className="text-gray-400">
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faXTwitter} className="mr-1" />
                    <a href="#" className="hover:text-gray-200">Twitter</a>
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faInstagram} className="mr-1" />
                    <a href="#" className="hover:text-gray-200">Instagram</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFacebook} className="mr-1" />
                    <a href="#" className="hover:text-gray-200">Facebook</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-semibold mb-4 uppercase">Legal</h2>
                <ul className="text-gray-400">
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-200">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-500" />
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">© 2024 <a href="#" className="hover:text-gray-200">True Holding LLC</a>. All Rights Reserved.</span>
          <div className="flex space-x-5">
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <FontAwesomeIcon icon={faXTwitter} className="mr-1" />
              <span className="sr-only">Twitter Community</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <FontAwesomeIcon icon={faInstagram} className="mr-1" />
              <span className="sr-only">Instagram Page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <FontAwesomeIcon icon={faFacebook} className="mr-1" />
              <span className="sr-only">Facebook Page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
