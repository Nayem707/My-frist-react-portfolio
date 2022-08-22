import React from 'react';
import './home.css';
import { Form, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <>
      <section>
        <div className='container-fluid bg-info m-0 p-0'>
          <marquee
            className='text-dark mt-1'
            width='100%'
            direction='left'
            height='100%'
          >
            <h5>Wellcome! To My React Portfolio</h5>
          </marquee>
        </div>
        <div className='container-fluid  text-center '>
          <div className='row'>
            <div className='col-lg-7 bg-default '>
              <div className='m-lg-5 pt-lg-2 '>
                <h1 className='text-dark pt-lg-2'>HI! I AM NAYEM ISLAM </h1>
                <h5 className='text-info'>Web Development And Designer</h5>
                <p className='text-dark'>
                  lorem ipesom doller lorem ipesom doller lorem ipesom doller
                  lorem ipesom doller lorem ipesom doller lorem ipesom doller
                </p>
                <button className='btn btn-outline-info text-dark'>
                  Hier Me
                </button>
                <button className='btn btn-outline-info text-dark m-2'>
                  Download CV
                </button>
                <div className='row mt-5 '>
                  <div className='col-lg-5  border rounded bg-dark'>
                    <h3 className='m-1 text-warning mt-3'>48+</h3>
                    <p className='text-light'>Projet </p>
                  </div>
                  <div className='col-lg-4  border'>
                    <h3 className='m-1 text-dark mt-3'>18+</h3>
                    <p className='text-dark'>Client </p>
                  </div>
                  <div className='col-lg-3  border rounded bg-dark'>
                    <h3 className='m-1 text-warning mt-3'>20+</h3>
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
        <div className='container-fluid bg-info mt-1'>
          <div className='row'>
            <div className='text-center pt-5 p-5'>
              <h1 className='text-light'>Service</h1>
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                harum, exercitationem eos ab neque veritatis quibusdam quaerat
                veniam cupiditate temporibus dolore blanditiis labore ipsa nisi
                eius officiis repellendus architecto culpa.
              </p>
              <button className='btn btn-outline-light text-default'>
                View Details
              </button>
            </div>

            <div className='mb-5'>
              <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-lg-5 text-center '>
                  <div className='card text-bg-ligth border-dark m-3'>
                    <div className='card-header'>Header</div>
                    <div className='card-body'>
                      <h5 className='card-title'>Primary card title</h5>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-5 text-center '>
                  <div className='card text-bg-dark border-light m-3'>
                    <div className='card-header'>Header</div>
                    <div className='card-body'>
                      <h5 className='card-title'>Primary card title</h5>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-5 text-center '>
                  <div className='card text-bg-ligth border-dark m-3'>
                    <div className='card-header'>Header</div>
                    <div className='card-body'>
                      <h5 className='card-title'>Primary card title</h5>
                      <p className='card-text'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-5 text-center '>
                  <div className='card text-bg-ligth border-dark m-3'>
                    <div className='card-header'>Header</div>
                    <div className='card-body'>
                      <h5 className='card-title'>Primary card title</h5>
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
                        <h5 className='card-title'>Primary card title</h5>
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
                        <h5 className='card-title'>Primary card title</h5>
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
                        <h5 className='card-title'>Primary card title</h5>
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
                        <h5 className='card-title'>Primary card title</h5>
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
                        <h5 className='card-title'>Primary card title</h5>
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
                        <h5 className='card-title'>Primary card title</h5>
                        <p className='card-text'>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 text-center '>
                    <div className='card text-bg-ligth border-dark m-2'>
                      <div className='card-header'>Header</div>
                      <div className='card-body'>
                        <h5 className='card-title'>Primary card title</h5>
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
            <div className='position-relative'>
              <h1 className='text-light text-center mt-4'>Subscribe</h1>
              <p className='text-light text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo, iure veritatis! Nesciunt rerum blanditiis corrupti,
                ad dolore sit voluptates ut veritatis consequatur! A ducimus
                exercitationem eum laudantium corporis, maiores minima.
              </p>
            </div>

            <div className='position-relative'>
              <Form className=' d-flex p-lg-5 mb-5'>
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

      <section>
        <div className='container-fluid bg-secondary '>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='p-5'>
                <h1 className='text-light text-center'>Our Client</h1>
                <p className='text-center text-info'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam non, sed sequi magni autem mollitia odit maiores
                  eligendi omnis velit deserunt iste quaerat ab nostrum quia
                  labore excepturi, illum tempore!
                </p>
                <Carousel>
                  <Carousel.Item>
                    <div className='row justify-content-center'>
                      <div className='col-lg-4 text-center bg-info rounded'>
                        <img
                          className='w-50 img-fluid rounded img-thumbnail rounded-circle mt-2'
                          src='image/n1.png'
                          alt='Third slide'
                        />
                        <h1 className='card-title text-light'>Nayem Islam</h1>
                        <h5>Senior Web Devloper</h5>
                        <p className='card-text m-2'>
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content".
                        </p>
                        <h5>Contact</h5>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className='row justify-content-center'>
                      <div className='col-lg-4 text-center bg-info rounded'>
                        <img
                          className='w-50 img-fluid rounded img-thumbnail rounded-circle mt-2'
                          src='image/n2.png'
                          alt='Third slide'
                        />
                        <h1 className='card-title text-light'>Nayem Islam</h1>
                        <h5>Senior Web Devloper</h5>
                        <p className='card-text m-2 text-light'>
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content".
                        </p>
                        <h5>Contact</h5>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className='row justify-content-center'>
                      <div className='col-lg-4 text-center bg-info rounded'>
                        <img
                          className='w-50 img-fluid rounded img-thumbnail rounded-circle mt-2'
                          src='image/n.png'
                          alt='Third slide'
                        />
                        <h1 className='card-title text-light'>Nayem Islam</h1>
                        <h5>Senior Web Devloper</h5>
                        <p className='card-text m-2'>
                          "Some quick example text to build on the card title
                          and make up the bulk of the card's content".
                        </p>
                        <h5>Contact</h5>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
