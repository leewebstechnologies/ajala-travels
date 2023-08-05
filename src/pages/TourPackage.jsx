import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const TourPackage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <main className="main" id="main">
        <section
          className="section about-hero"
          style={{ backgroundImage: "url(./assets/images/bg-about.jpg)" }}
          id="hero"
        >
          <h1 className="hero__title">Tour Package</h1>
        </section>

        <section className="section tour container">
          <div className="tour__container">
            <div className="tour__card">
              <img
                src="./assets/images/img-1.jpg"
                alt=""
                class="tour__card-img"
              />
              <div className="tour__data">
                <h5 className="tour__data-title">Opera House</h5>
                <span className="tour__data-subtitle">Sidney</span>
              </div>
              <Link to="/tour-package/asd" className="tour__link"></Link>
            </div>
            <div className="tour__card">
              <img
                src="./assets/images/img-2.jpg"
                alt=""
                className="tour__card-img"
              />
              <div className="tour__data">
                <h5 className="tour__data-title">Eiffel Tower</h5>
                <span className="tour__data-subtitle">Paris</span>
              </div>
              <Link to="/tour-package/asd" className="tour__link"></Link>
            </div>
            <div className="tour__card">
              <img
                src="./assets/images/img-3.jpg"
                alt=""
                className="tour__card-img"
              />
              <div className="tour__data">
                <h5 className="tour__data-title">Eiffel Tower</h5>
                <span className="tour__data-subtitle">Paris</span>
              </div>
              <Link to="/tour-package/asd" className="tour__link"></Link>
            </div>
            <div class="tour__card">
              <img
                src="./assets/images/img-4.jpg"
                alt=""
                className="tour__card-img"
              />
              <div className="tour__data">
                <h5 className="tour__data-title">Golden Bridge</h5>
                <span className="tour__data-subtitle">New York</span>
              </div>
              <Link to="/tour-package/asd" className="tour__link"></Link>
            </div>
            <div class="tour__card">
              <img
                src="./assets/images/img-5.jpg"
                alt=""
                className="tour__card-img"
              />
              <div className="tour__data">
                <h5 className="tour__data-title">Big Mosque</h5>
                <span className="tour__data-subtitle">India</span>
              </div>
              <Link to="/tour-package/asd" className="tour__link"></Link>
            </div>
            <div className="tour__card">
              <img
                src="./assets/images/img-6.jpg"
                alt=""
                className="tour__card-img"
              />
              <div className="tour__data">
                <h5 className="tour__data-title">Central Park</h5>
                <span className="tour__data-subtitle">London</span>
              </div>
              <Link to="/tour-package/asd" className="tour__link"></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TourPackage;
