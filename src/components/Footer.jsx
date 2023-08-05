import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h3 className="footer__title">Follow Us</h3>

        <div className="footer__social">
          <Link
            to="https://web.facebook.com/ali.ajibade.946"
            class="footer__social-link"
          >
            <i className="bx bxl-facebook"></i>
          </Link>
          <Link
            to="https://twitter.com/Aliu94992120"
            class="footer__social-link"
          >
            <i className="bx bxl-twitter"></i>
          </Link>
          <Link
            to="https://www.instagram.com/leewebs2020"
            className="footer__social-link"
          >
            <i class="bx bxl-instagram"></i>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
