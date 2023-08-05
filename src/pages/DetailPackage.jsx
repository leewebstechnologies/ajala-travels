// import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const DetailPackage = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    emailjs
      .sendForm(
        "service_2bwa8bq",
        "template_nx6tqat",
        formRef.current,
        "D7s2QtY9npU46KDNG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [selectedImage, setSelectedImage] = useState(
    "../assets/images/detail-img.jpg"
  );
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
                It shouldn’t be a surprise that Africa’s most populous country
                has over 250 ethic groups, and there are over 500 native
                languages spoken throughout the country – however oftentimes it
                is! Welcome to Nigeria – much more than a petroleum capital of
                the world! On the contrary, explore protected reserves such as
                Yankari National Park and Cross River National Park offering
                refuge to some of the continent’s most recognized mammals
                including the African elephant and lion. The diversity in the
                landscapes across the regions is astounding from savannas to
                mountain ranges covered in rainforest to swampy mangrove areas.
                This topography allows for a wide range of flora to thrive –
                much of which is also endemic. Nigeria allows you to absorb an
                array of music, dancing, and art throughout the land as you
                experience different tribes and their customs. Whether strolling
                through the streets of Lagos, cruising by local boat along the
                Niger River, or enjoying a locally prepped and cooked meal
                talking about life with a Hausa – Fulani, Nigeria is
                captivating. With preconceived ideas behind you, immerse
                yourself in the moments – both expected and unexpected!
              </p>
            </div>
          </div>
          <div className="detail__form card">
            <h4 className="detail__form-title">Join Now</h4>
            <form action="" ref={formRef} onSubmit={handleSubmit}>
              <div className="form__group">
                <input
                  className="form__group-input"
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  required
                />
              </div>
              <div className="form__group">
                <input
                  className="form__group-input"
                  type="text"
                  placeholder="Enter the subject"
                  name="user_subject"
                  required
                />
              </div>
              <div className="form__group">
                <input
                  className="form__group-input"
                  type="email"
                  placeholder="Enter your email"
                  name="user_email"
                  required
                />
              </div>
              <div className="form__group">
                <textarea
                  className="form__group-textarea"
                  placeholder="Enter your message"
                  rows="5"
                  name="message"
                ></textarea>
              </div>
              <div className="form__group">
                <button className="button button-detail">Submit</button>
              </div>
              <h1 className="m">{done && "Thank you..."}</h1>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DetailPackage;
