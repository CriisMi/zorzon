import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Homepage from "./Homepage";
import "./App.css";
import DropdownMenu from "./DropdownMenu";

function App() {
  return (
    <Router>
      <DropdownMenu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
