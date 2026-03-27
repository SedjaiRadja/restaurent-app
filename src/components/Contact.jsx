import { assets } from "../assets/assets";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-container">
      <div className="left-side">
        <h1>Contact Us</h1>
        <p>
          have a suggestion in mind ? We'd love to hear from you.Send us a
          message and we'll respond as soon as possible.
        </p>
        <div className="images">
          <div className="contact-item">
            <img src={assets.mail_logo} alt="email" />
            <p>radjarestaurent@gmail.com</p>
          </div>
          <div className="contact-item">
            <img src={assets.phone_logo} alt="phone" />
            <p>+213 784 62 12 34</p>
          </div>
          <div className="contact-item">
            <img src={assets.address_logo} alt="address" />
            <p>Oran, Algeria</p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Send</button>
        </form>
        <Link className="back-home" to="/">Back to Home</Link>
      </div>
    </div>
  );
}
export default Contact;
