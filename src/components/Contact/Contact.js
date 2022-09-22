import React from 'react';
import {
  FaEnvelope,
  FaHome,
  FaMapMarkerAlt,
  FaMobileAlt,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section>
      <div className='container-fluid mb-5 mt-5'>
        <div className='row justify-content-center'>
          <div className='col-sm-5 mt-5'>
            <h4>
              <strong>We'll get back to you within 24 hours.</strong>
            </h4>
            <p>
              <FaHome /> Krishnapur-2461, Khaliajuri, Netrakona, Bangladesh.
              <FaMapMarkerAlt />
            </p>
            <p>
              <FaMobileAlt /> +880 1777-941513
            </p>
            <p>
              <FaEnvelope /> inaeem707@gmail.com
            </p>
          </div>

          <div className='col-sm-6 mt-5'>
            <div className='row'>
              <h1 className='text-center'>Contact</h1>
              <div className='col-sm-6 form-group'>
                <input
                  className='form-control'
                  id='name'
                  name='name'
                  placeholder='Name'
                  type='name'
                  required></input>
              </div>

              <div className='col-sm-6 form-group'>
                <input
                  className='form-control'
                  id='email'
                  name='email'
                  placeholder='Email'
                  type='email'
                  required></input>
              </div>
            </div>
            <br></br>
            <textarea
              className='form-control'
              id='comments'
              name='comments'
              placeholder='Comment'
              rows='5'></textarea>
            <br></br>
            <div className='row'>
              <div className='col-sm-12 form-group'>
                <button
                  className='btn btn-outline-info text-dark pull-center'
                  type='submit'>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
