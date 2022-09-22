/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import './home.css';
import { Form, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import {
  FaJsSquare,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaChalkboardTeacher,
} from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <section>
        <div className='container-fluid bg-info mt-5 pt-3'>
          <marquee
            className='text-dark  mt-2'
            width='100%'
            direction='left'
            height='100%'>
            <h4>
              Wellcome! to my React Portfolio. Creacte react js with bootstrap.{' '}
            </h4>
          </marquee>
        </div>
        <div className='container-fluid  text-center '>
          <div className='row'>
            <div className='col-lg-7 bg-default '>
              <div className='m-lg-5 pt-lg-2 '>
                <h1 className='text-dark pt-lg-6'>আমি মো: নাঈম ইসলাম </h1>
                <h4 className='text-info'>Web Development And Designer</h4>
                <p className='text-dark'>
                  আমি একজন দক্ষ ওয়েব ডেবেলপার হিসেবে গড়ে উঠতে চাই। আমার লক্ষ্য
                  আগামীর বাংলাদেশকে ডিজিটালাইজ করতে সহায়তা করা।
                </p>
                <button className='btn btn-outline-info text-dark'>
                  Hier Me
                </button>
                <button className='btn btn-outline-info text-dark m-2'>
                  Download CV
                </button>
                <div className='row mt-5 '>
                  <div className='col-lg-5  border rounded bg-dark'>
                    <h4 className='m-1 text-warning mt-3'>48+</h4>
                    <p className='text-light'>Projet </p>
                  </div>
                  <div className='col-lg-4  border'>
                    <h4 className='m-1 text-dark mt-3'>18+</h4>
                    <p className='text-dark'>Client </p>
                  </div>
                  <div className='col-lg-3  border rounded bg-dark'>
                    <h4 className='m-1 text-warning mt-3'>20+</h4>
                    <p className='text-light'>Customer </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-5'>
              <img
                src='image/n.jpg'
                alt='Italian Trulli'
                className='img-fluid float-end header-img rounded'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section>
        <div className='container-fluid bg-info'>
          <div className='row'>
            <div className='text-center p-5'>
              <h1 className='text-bolder'>Service</h1>
              <p className='text-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                harum, exercitationem eos ab neque veritatis quibusdam quaerat
                veniam cupiditate temporibus dolore blanditiis labore ipsa nisi
                eius officiis repellendus architecto culpa.
              </p>
              <button className='btn btn-dark text-light'>View Details</button>
            </div>

            <div className='mb-5 p-5 pt-0'>
              <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-4 text-center '>
                  <div className='card text-bg-dark border-light'>
                    <div className='card-header'>
                      <FaChalkboardTeacher size={40} />
                    </div>
                    <div className='card-body'>
                      <h4 className='card-title'>Code Edit</h4>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 text-center '>
                  <div className='card border-dark m-1'>
                    <div className='card-header'>
                      <FaHtml5 size={40} />
                    </div>
                    <div className='card-body'>
                      <h4 className='card-title'>HTML-5</h4>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 text-center '>
                  <div className='card text-bg-dark border-light border-dark'>
                    <div className='card-header'>
                      <FaJsSquare size={40} />
                    </div>
                    <div className='card-body'>
                      <h4 className='card-title'>Java Script</h4>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 text-center '>
                  <div className='card border-dark m-1'>
                    <div className='card-header'>
                      <FaReact size={40} />
                    </div>
                    <div className='card-body'>
                      <h4 className='card-title'> React JS</h4>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 text-center '>
                  <div className='card text-bg-ligth border-dark m-1'>
                    <div className='card-header'>
                      <FaNodeJs size={40} />
                    </div>
                    <div className='card-body'>
                      <h4 className='card-title'> Node JS</h4>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section>
        <div className='container-fluid d-none d-sm-block'>
          <div className='row'>
            <div className='position-relative m-0 p-0 '>
              <img
                src='image/photo.png'
                alt='Italian Trulli'
                className='col-lg-12 img-fluid'
              />
            </div>
            <div className='position-absolute text-center pt-5 p-5'>
              <h1>Next Project</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                harum, exercitationem eos ab neque veritatis quibusdam quaerat
                veniam cupiditate temporibus dolore blanditiis labore ipsa nisi
                eius officiis repellendus architecto culpa.
              </p>
              <button className='btn btn-outline-dark'>View Details</button>

              <div className='mt-5'>
                <div className='row d-flex justify-content-center align-items-center'>
                  <div className='col-lg-3 text-center '>
                    <div className='card text-bg-ligth border-dark m-2'>
                      <div className='card-header'>Header</div>
                      <div className='card-body'>
                        <h4 className='card-title'>Primary card title</h4>
                        <p className='card-text'>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 text-center '>
                    <div className='card text-bg-dark border-light m-2'>
                      <div className='card-header'>Header</div>
                      <div className='card-body'>
                        <h4 className='card-title'>Primary card title</h4>
                        <p className='card-text'>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 text-center '>
                    <div className='card text-bg-dark border-light m-2'>
                      <div className='card-header'>Header</div>
                      <div className='card-body'>
                        <h4 className='card-title'>Primary card title</h4>
                        <p className='card-text'>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 text-center '>
                    <div className='card text-bg-ligth border-light m-2'>
                      <div className='card-header'>Header</div>
                      <div className='card-body'>
                        <h4 className='card-title'>Primary card title</h4>
                        <p className='card-text'>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 text-center '>
                    <div className='card text-bg-dark border-light m-2'>
                      <div className='card-header'>Header</div>
                      <div className='card-body'>
                        <h4 className='card-title'>Primary card title</h4>
                        <p className='card-text'>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 text-center '>
                    <div className='card text-bg-ligth border-light m-2'>
                      <div className='card-header'>Header</div>
                      <div className='card-body'>
                        <h4 className='card-title'>Primary card title</h4>
                        <p className='card-text'>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 text-center '>
                    <div className='card text-bg-dark border-dark m-2'>
                      <div className='card-header'>Header</div>
                      <div className='card-body'>
                        <h4 className='card-title'>Primary card title</h4>
                        <p className='card-text'>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* subscribe */}
      <section>
        <div className='container-fluid bg-dark '>
          <div className='row'>
            <div className='col-lg-6'>
              <h1 className='text-light text-center mt-4'>Subscribe</h1>
              <p className='text-light text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo, iure veritatis! Nesciunt rerum blanditiis corrupti,
                ad dolore sit voluptates ut veritatis consequatur! A ducimus
                exercitationem eum laudantium corporis, maiores minima.
              </p>
            </div>

            <div className='col-lg-6 '>
              <Form className='d-flex mt-5 p-4'>
                <Form.Control
                  type='search'
                  placeholder='E-mail'
                  className='m-auto'
                  aria-label='Search'
                />
                <Button className='btn btn-warning m-auto'>Subscribe</Button>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* coursole */}
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12 p-5'>
              <div className=''>
                <h1 className='text-center'>Our Client</h1>
                <p className='text-center'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam non, sed sequi magni autem mollitia odit maiores
                  eligendi omnis velit deserunt iste quaerat ab nostrum quia
                  labore excepturi, illum tempore! Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Aliquam non, sed sequi magni
                  autem mollitia odit maiores eligendi omnis velit deserunt iste
                  quaerat ab nostrum quia labore excepturi, illum tempore!
                </p>
                <div className=''>
                  <Carousel>
                    <Carousel.Item>
                      <div className='row'>
                        <div className='col-lg-12 d-flex'>
                          <div className=' justify-content-center'>
                            <div className='m-2 text-center bg-info rounded'>
                              <img
                                className='w-50 img-fluid rounded img-thumbnail rounded-circle mt-2'
                                src='image/n1.png'
                                alt='Third slide'
                              />
                              <h1 className='card-title text-light'>
                                Nayem Islam
                              </h1>
                              <h4>Senior Web Developer</h4>
                              <p className='card-text m-2'>
                                "Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content".
                              </p>
                              <h4>Contact</h4>
                            </div>
                          </div>
                          <div className='justify-content-center'>
                            <div className='m-2 text-center bg-info rounded'>
                              <img
                                className='w-50 img-fluid rounded img-thumbnail rounded-circle mt-2'
                                src='image/n1.png'
                                alt='Third slide'
                              />
                              <h1 className='card-title text-light'>
                                Nayem Islam
                              </h1>
                              <h4>Senior Web Developer</h4>
                              <p className='card-text m-2'>
                                "Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content".
                              </p>
                              <h4>Contact</h4>
                            </div>
                          </div>
                          <div className='justify-content-center'>
                            <div className='m-2 text-center bg-info rounded'>
                              <img
                                className='w-50 img-fluid rounded img-thumbnail rounded-circle mt-2'
                                src='image/n1.png'
                                alt='Third slide'
                              />
                              <h1 className='card-title text-light'>
                                Nayem Islam
                              </h1>
                              <h4>Senior Web Developer</h4>
                              <p className='card-text m-2'>
                                "Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content".
                              </p>
                              <h4>Contact</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className='row'>
                        <div className='col-lg-12 d-flex'>
                          <div className=' justify-content-center'>
                            <div className='m-2 text-center bg-info rounded'>
                              <img
                                className='w-50 img-fluid rounded img-thumbnail rounded-circle mt-2'
                                src='image/n1.png'
                                alt='Third slide'
                              />
                              <h1 className='card-title text-light'>
                                Nayem Islam
                              </h1>
                              <h4>Senior Web Developer</h4>
                              <p className='card-text m-2'>
                                "Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content".
                              </p>
                              <h4>Contact</h4>
                            </div>
                          </div>
                          <div className='justify-content-center'>
                            <div className='m-2 text-center bg-info rounded'>
                              <img
                                className='w-50 img-fluid rounded img-thumbnail rounded-circle mt-2'
                                src='image/n1.png'
                                alt='Third slide'
                              />
                              <h1 className='card-title text-light'>
                                Nayem Islam
                              </h1>
                              <h4>Senior Web Developer</h4>
                              <p className='card-text m-2'>
                                "Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content".
                              </p>
                              <h4>Contact</h4>
                            </div>
                          </div>
                          <div className='justify-content-center'>
                            <div className='m-2 text-center bg-info rounded'>
                              <img
                                className='w-50 img-fluid rounded img-thumbnail rounded-circle mt-2'
                                src='image/n1.png'
                                alt='Third slide'
                              />
                              <h1 className='card-title text-light'>
                                Nayem Islam
                              </h1>
                              <h4>Senior Web Developer</h4>
                              <p className='card-text m-2'>
                                "Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content".
                              </p>
                              <h4>Contact</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className='row'>
                        <div className='col-lg-12 d-flex'>
                          <div className=' justify-content-center'>
                            <div className='m-2 text-center bg-info rounded'>
                              <img
                                className='w-50 img-fluid rounded img-thumbnail rounded-circle mt-2'
                                src='image/n1.png'
                                alt='Third slide'
                              />
                              <h1 className='card-title text-light'>
                                Nayem Islam
                              </h1>
                              <h4>Senior Web Developer</h4>
                              <p className='card-text m-2'>
                                "Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content".
                              </p>
                              <h4>Contact</h4>
                            </div>
                          </div>
                          <div className='justify-content-center'>
                            <div className='m-2 text-center bg-info rounded'>
                              <img
                                className='w-50 img-fluid rounded img-thumbnail rounded-circle mt-2'
                                src='image/n1.png'
                                alt='Third slide'
                              />
                              <h1 className='card-title text-light'>
                                Nayem Islam
                              </h1>
                              <h4>Senior Web Developer</h4>
                              <p className='card-text m-2'>
                                "Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content".
                              </p>
                              <h4>Contact</h4>
                            </div>
                          </div>
                          <div className='justify-content-center'>
                            <div className='m-2 text-center bg-info rounded'>
                              <img
                                className='w-50 img-fluid rounded img-thumbnail rounded-circle mt-2'
                                src='image/n1.png'
                                alt='Third slide'
                              />
                              <h1 className='card-title text-light'>
                                Nayem Islam
                              </h1>
                              <h4>Senior Web Developer</h4>
                              <p className='card-text m-2'>
                                "Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content".
                              </p>
                              <h4>Contact</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
