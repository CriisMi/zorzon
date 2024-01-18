import "./Homepage.css";
import ImageCarousel from "./ImageCarousel";
import img1 from "/src/assets/projects-images/ZZD3_1.jpeg";
import img2 from "/src/assets/projects-images/ZZD3_2.jpeg";
import img3 from "/src/assets/projects-images/ZZD3_3.jpeg";
import img4 from "/src/assets/projects-images/ZZD3_4.jpeg";
import img5 from "/src/assets/projects-images/ZZD3_5.jpeg";
import logo from "/src/assets/logo1.png";
import { Link } from "react-router-dom";

function Homepage() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <>
      <div className="homepage">
        <Link to="/contact">
          <img src={logo} alt="Company logo" className="logo" />
        </Link>
        <ImageCarousel images={images} />
      </div>
    </>
  );
}

export default Homepage;
