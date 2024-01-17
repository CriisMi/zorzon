import "./App.css";
import ImageCarousel from "./ImageCarousel";

function App() {
  const images = [
    "src/assets/projects-images/ZZD3_1.jpeg",
    "src/assets/projects-images/ZZD3_2.jpeg",
    "src/assets/projects-images/ZZD3_3.jpeg",
    "src/assets/projects-images/ZZD3_4.jpeg",
    "src/assets/projects-images/ZZD3_5.jpeg",
  ];

  return (
    <>
      <div>ZZDesign</div>
      <ImageCarousel images={images} />
    </>
  );
}

export default App;
