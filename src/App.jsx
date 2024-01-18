import "./App.css";
import ImageCarousel from "./ImageCarousel";
import img1 from "/src/assets/projects-images/ZZD3_1.jpeg";
import img2 from "/src/assets/projects-images/ZZD3_2.jpeg";
import img3 from "/src/assets/projects-images/ZZD3_3.jpeg";
import img4 from "/src/assets/projects-images/ZZD3_4.jpeg";
import img5 from "/src/assets/projects-images/ZZD3_5.jpeg";

function App() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <>
      <div>ZZDesign</div>
      <ImageCarousel images={images} />
    </>
  );
}

export default App;
