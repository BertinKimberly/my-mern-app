import Header from "../../components/Header"
import HeaderImage from "../../images/p1.jpeg"
import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import "./contact.css"
const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio explicabo id illum vero rerum soluta facilis officia, possimus reiciendis.</Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:iradukundabertin082@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
            <a href="https://m.me/bertinIradukunda" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+250079000000" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
