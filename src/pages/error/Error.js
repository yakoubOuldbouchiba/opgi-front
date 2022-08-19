import "./error.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="error-section">
      <h2>404</h2>
      <p>
        Désolé, cette page est inaccessible{" "}
        <Link to="/" className="error-link">
          aller à la page d'accueil
        </Link>
      </p>
    </section>
  );
};
export default Error;
