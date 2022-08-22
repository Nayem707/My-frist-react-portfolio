import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const About = () => {
  return (
    <>
      <section>
        <div className='cotainer-fluid'>
          <div class='row bg-dark text-light'>
            <div class='col-lg-5 text-center'>
              <div class='about-img' />{' '}
              <img
                src='image/n1.png'
                alt='dd'
                className='w-50 img-fluid rounded img-thumbnail mx-auto mb-5 mt-5'
              />
            </div>
            <div className='col-lg-6 align-items-center mt-5'>
              <div className='about-text'>
                <h1 className='dark-color '>NAYEM ISLAM</h1>
                <h4 className='text-warning'>
                  UI / UX Designer &amp; Web Developer
                </h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores. My passion is to design digital
                  user experiences through the bold interface and meaningful
                  interactions.
                </p>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores.
                </p>
                <div class='btn-bar m-2'>
                  <button className='btn btn-outline-info'>View Details</button>
                  <button className='btn btn-outline-info'>Download CV</button>
                </div>
              </div>
            </div>
          </div>

          {/* skill */}
          <div className='row justify-content-center mb-3 bg-info'>
            <div className='col-sm-8'>
              <h1 className='text-center mt-5 text-light'>Skills</h1>
              <p className='text-center'>
                Fusce massa dolor, mattis sed ultrices ut, placerat ut leo.
                Donec sed fringilla lectus, non vulputate orci. Integer id
                libero euismod, interdum ligula vel, porttitor magna. Sed
                euismod maximus finibus.
              </p>
              <div className='card mb-5'>
                <div className='card-body'>
                  <p>Web Design</p>
                  <div className='progress mb-3' style={{ height: '15px' }}>
                    <div
                      className='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: '90%' }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    >
                      <strong>90%</strong>
                    </div>
                  </div>
                  <p>Website Markup</p>
                  <div className='progress mb-3' style={{ height: '15px' }}>
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow='72'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    >
                      <strong>75%</strong>
                    </div>
                  </div>
                  <p>One Page</p>
                  <div className='progress mb-3' style={{ height: '15px' }}>
                    <div
                      className='progress-bar bg-success'
                      role='progressbar'
                      style={{ width: '70%' }}
                      aria-valuenow='89'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    >
                      <strong>70%</strong>
                    </div>
                  </div>
                  <p>Mobile Template</p>
                  <div className='progress mb-3' style={{ height: '15px' }}>
                    <div
                      className='progress-bar bg-warning'
                      role='progressbar'
                      style={{ width: '65%' }}
                      aria-valuenow='55'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    >
                      <strong>65%</strong>
                    </div>
                  </div>

                  <p>Backend API</p>

                  <div className='progress' style={{ height: '15px' }}>
                    <div
                      className='progress-bar bg-info'
                      role='progressbar'
                      style={{ width: '70%' }}
                      aria-valuenow='66'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    >
                      <strong>70%</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* experiences */}
        <div className='row justify-content-center mb-5'>
          <div className='col-sm-8'>
            <h1 className='text-center mt-5'>Experience</h1>
            <p className='text-center'>
              Fusce massa dolor, mattis sed ultrices ut, placerat ut leo. Donec
              sed fringilla lectus, non vulputate orci. Integer id libero
              euismod, interdum ligula vel, porttitor magna. Sed euismod maximus
              finibus.
            </p>
            <Accordion defaultActiveKey='0'>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>Click Here!</Accordion.Header>
                <Accordion.Body className='bg-dark border text-light'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>More Details</Accordion.Header>
                <Accordion.Body className='bg-info border text-light'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header>More Details</Accordion.Header>
                <Accordion.Body className='bg-dark border text-light'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
