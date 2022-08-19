import "./section.css";
import { Outlet } from "react-router-dom";
const Section = () => {
  return (
    <>
      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
export default Section;
