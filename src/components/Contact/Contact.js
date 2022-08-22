import React from 'react';

const Contact = () => {
  return (
    <section>
      <div id='contact' className='container-fluid mb-5 mt-5'>
        <h1 className='text-center m-5 mb-4'>Contact</h1>
        <div className='row'>
          <div className='col-sm-5 mt-0 p-5'>
            <h4>
              <strong>We'll get back to you within 24 hours.</strong>
            </h4>
            <p>Krishnapur-2461, Khaliajuri, Netrakona, BD.</p>
            <p>+880 1777-941513</p>
            <p>inaeem707@gmail.com</p>
          </div>
          <div className='col-sm-6'>
            <div className='row'>
              <div className='col-sm-6 form-group'>
                <input
                  className='form-control'
                  id='name'
                  name='name'
                  placeholder='Name'
                  type='name'
                  required
                ></input>
              </div>

              <div className='col-sm-6 form-group'>
                <input
                  className='form-control'
                  id='email'
                  name='email'
                  placeholder='Email'
                  type='email'
                  required
                ></input>
              </div>
            </div>
            <br></br>
            <textarea
              className='form-control'
              id='comments'
              name='comments'
              placeholder='Comment'
              rows='5'
            ></textarea>
            <br></br>
            <div className='row'>
              <div className='col-sm-12 form-group'>
                <button
                  className='btn btn-outline-info text-dark pull-center'
                  type='submit'
                >
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
