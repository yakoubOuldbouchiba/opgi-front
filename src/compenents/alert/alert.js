import { useEffect } from "react";
import "./alert.css";
const Alert = ({ alert, hiddenAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      hiddenAlert();
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <div
      className={
        alert.type === "seccuss" ? "alter alter-seccuss" : "alter alter-fail"
      }
    >
      <span>{alert.msg}</span>
    </div>
  );
};
export default Alert;
