// import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const DetailPackage = () => {
  const [selectedImage, setSelectedImage] = useState(
    "../assets/images/detail-img.jpg"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <main className="container" style={{ marginTop: "120px" }}>
        <section className="detail">
          <div className="detail__card card">
            <img src={selectedImage} alt="" className="detail__card-img" />
            <div className="detail__card-img-list">
              <img
                src="../assets/images/detail-img.jpg"
                alt=""
                onClick={() =>
                  setSelectedImage("../assets/images/detail-img.jpg")
                }
                className={`detail__card-img-item ${
                  selectedImage === "../assets/images/detail-img.jpg"
                    ? "active"
                    : ""
                }`}
              />
              <img
                src="../assets/images/detail-img2.jpg"
                alt=""
                onClick={() =>
                  setSelectedImage("../assets/images/detail-img2.jpg")
                }
                className={`detail__card-img-item ${
                  selectedImage === "../assets/images/detail-img2.jpg"
                    ? "active"
                    : ""
                }`}
              />
              <img
                src="../assets/images/detail-img3.jpg"
                alt=""
                onClick={() =>
                  setSelectedImage("../assets/images/detail-img3.jpg")
                }
                className={`detail__card-img-item ${
                  selectedImage === "../assets/images/detail-img3.jpg"
                    ? "active"
                    : ""
                }`}
              />
              <img
                src="../assets/images/detail-img4.jpg"
                alt=""
                onClick={() =>
                  setSelectedImage("../assets/images/detail-img4.jpg")
                }
                className={`detail__card-img-item ${
                  selectedImage === "../assets/images/detail-img4.jpg"
                    ? "active"
                    : ""
                }`}
              />
            </div>
            <div className="detail__card-data">
              <div className="detail__card-title">
                <h4>Description</h4>
                <h5>
                  $100 <span>/ 4D3N</span>
                </h5>
              </div>
              <p className="detail__card-description">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or an omised words which don't look even
                slightly believable. If you are goingse a passage of Lorem
                Ipsum, you need to be sure there isn't anything emba rrassing.
                Variations of passages of lorem Ipsum available but the majority
                have suffered alteration in some form,
              </p>
            </div>
          </div>
          <div className="detail__form card">
            <h4 className="detail__form-title">Join Now</h4>
            <form action="">
              <div className="form__group">
                <input
                  className="form__group-input"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form__group">
                <input
                  className="form__group-input"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form__group">
                <textarea
                  className="form__group-textarea"
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
              </div>
              <div className="form__group">
                <button className="button button-detail">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DetailPackage;
