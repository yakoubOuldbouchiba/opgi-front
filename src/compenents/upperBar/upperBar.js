import "./upperBar.css";
import { FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
const UpperBar = () => {
  return (
    <div className="upper-bar-container">
      <div className="upper-bar">
        <div className="address">
          <HiLocationMarker className="icon" /> Boulevard Administratif,
          Boumerdes
        </div>
        <div className="phone">
          <FaPhone className="icon" /> 024 79 58 45 / 024 79 58 58
        </div>
      </div>
    </div>
  );
};

export default UpperBar;
