import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">BRT</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            odit perferendis vitae accusantium molestiae assumenda excepturi
            cumque recusandae laboriosam debitis.
          </p>
          <div className="footer__socials">
            <Link
              to="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </Link>
            <Link
              to="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </Link>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>

          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        {" "}
        <small>2023 BRT &copy; All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
