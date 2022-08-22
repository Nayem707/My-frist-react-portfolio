import React from 'react';

const Footer = () => {
  return (
    <footer className='position-relative py-9 py-lg-12 bg-dark text-light'>
      <div className='container px-xl-10'>
        <div className='row'>
          <div className='col-lg-10 mx-auto text-center mt-5'>
            <p className='text-gray-400 mb-5'>
              Bootstrap Personal Portfolio Resume Template and UI kit that will
              help you prototype and design beautiful, creative and modern
              websites.
            </p>
            <ul className='list-inline mb-8'>
              <li className='list-inline-item mx-0'>
                <a
                  className='btn btn-sm btn-icon btn-soft-secondary text-gray-400'
                  href='#!'
                >
                  <i className='fab fa-facebook-f btn-icon-inner'></i>
                </a>
              </li>

              <li className='list-inline-item mx-0'>
                <a
                  className='btn btn-sm btn-icon btn-soft-secondary text-gray-400'
                  href='#!'
                >
                  <i className='fab fa-twitter btn-icon-inner'></i>
                </a>
              </li>

              <li className='list-inline-item mx-0'>
                <a
                  className='btn btn-sm btn-icon btn-soft-secondary text-gray-400'
                  href='#!'
                >
                  <i className='fab fa-linkedin-in btn-icon-inner'></i>
                </a>
              </li>

              <li className='list-inline-item mx-0'>
                <a
                  className='btn btn-sm btn-icon btn-soft-secondary text-gray-400'
                  href='#!'
                >
                  <i className='fab fa-dribbble btn-icon-inner'></i>
                </a>
              </li>
            </ul>
            <p className='mb-4'>
              Copyright © Nayemislam.com 2022. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
