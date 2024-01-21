import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "/src/assets/menu.svg";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={menuIcon} alt="Dropdown menu" />
      </button>
      {isOpen && (
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(!isOpen)}>
              ZorZon
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
