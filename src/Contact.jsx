import { Link } from "react-router-dom";
import logo from "/src/assets/logob.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Link to="/">
        <img src={logo} alt="Company logo" className="logo" />
      </Link>
      <div>office@zorzon.com</div>
      <div>+40 989 234 511</div>
      <div>
        <a href="https://www.instagram.com/zorzon.studio/">ZZStudio</a>
      </div>
      <div>
        <a href="https://www.instagram.com/zz.design.p/">ZZDesign</a>
      </div>
    </div>
  );
};
export default Contact;
