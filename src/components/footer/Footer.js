import React from 'react';
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='position-relative py-9 py-lg-12 bg-dark text-light'>
      <div className='container px-xl-10'>
        <div className='row'>
          <div className='col-lg-10 mx-auto text-center mt-5'>
            <p className='text-gray-400 mb-2'>
              Bootstrap Personal Portfolio Resume Template and UI kit that will
              help you prototype and design beautiful, creative and modern
              websites. If you want Contact me as social activity.
            </p>
            <h4>Go to my Profile</h4>
            <div className='mb-3 '>
              <FaGithub size={40} />
              <FaFacebook size={40} />
              <FaLinkedin size={40} />
              <FaTwitterSquare size={40} />
            </div>
            <p className='mb-2'>
              Copyright © Nayemislam.com 2022. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
