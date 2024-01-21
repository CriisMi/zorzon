import { Link } from "react-router-dom";
import logo from "/src/assets/logob.svg";
import instagramLogo from "/src/assets/01 Static Glyph/03 Black Glyph/Instagram_Glyph_Black.svg";
import emailIcon from "/src/assets/mail.svg";
import phoneIcon from "/src/assets/phone.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Link to="/">
        <img src={logo} alt="Company logo" className="logo" />
      </Link>

      <div className="contact-cards">
        <div className="card">
          <img src={emailIcon} alt="mail" />
          <div>office@zorzon.com</div>
        </div>
        <div className="card">
          <img src={phoneIcon} alt="phone" />
          <div>+40 989 234 511</div>
        </div>
        <div className="card">
          <a
            href="https://www.instagram.com/zorzon.studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="Instagram" />
            <div>ZZStudio</div>
          </a>
        </div>
        <div className="card">
          <a
            href="https://www.instagram.com/zz.design.p/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="Instagram" />
            <div>ZZDesign</div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
