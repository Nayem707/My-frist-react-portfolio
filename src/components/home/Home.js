import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-lg-6 bg-light">
            <div className="m-5">
              <h1>Hi I am Nayem Islam</h1>
              <h3>Web Designer</h3>
              <p>
                lorem ipesom doller lorem ipesom doller lorem ipesom doller
                lorem ipesom doller lorem ipesom doller lorem ipesom doller
              </p>
              <button className="btn btn-primary">Hier Me</button>

              <div className="row mt-5">
                <div className="col-lg-4 mt-5">
                  <h4>narrn ,ofdnnv</h4>
                  <p>loifjfbh jhsd gfhkjsgd jgdshfgdfs </p>
                </div>
                <div className="col-lg-4 mt-5">
                  <h4>narrn ,ofdnnv</h4>
                  <p>loifjfbh jhsd gfhkjsgd jgdshfgdfs </p>
                </div>
                <div className="col-lg-4 mt-5">
                  <h4>narrn ,ofdnnv</h4>
                  <p>loifjfbh jhsd gfhkjsgd jgdshfgdfs </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="image/n.jpg"
              alt="Italian Trulli"
              className="img-fluid float-end header-img rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
