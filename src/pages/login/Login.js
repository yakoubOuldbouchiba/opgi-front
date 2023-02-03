import "./login.css";
import logo from "../../../src/OPGI-BOUMERDES.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../compenents/alert/alert";

const Login = ({ setBien }) => {
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "test",
  });

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const [loginInfo, setLoginInfo] = useState({
    code: "",
    password: "",
  });

  const changeInfoLogin = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    setLoginInfo({ ...loginInfo, [name]: value });
  };
  const nagivate = useNavigate();
  const connexion = async (event) => {
    event.preventDefault();
    if (loginInfo.code && loginInfo.password && loginInfo.password === "1234") {
      console.log(loginInfo.code + " " + loginInfo.password);
      const res = await fetch(
        "http://127.0.0.1:8000/api/biens/" + loginInfo.code
      );
      const data = await res.json();

      if (!data.hasOwnProperty("error")) {
        const bien = await data.data;
        setBien(bien);
        nagivate("/Dashbord");
      } else {
        showAlert(
          true,
          "danger",
          "veuillez entrer votre code et votre mot de passe corrects"
        );
      }
    } else {
      showAlert(
        true,
        "danger",
        "veuillez saisir votre code et votre mot de passe"
      );
    }
  };
  return (
    <>
      <section className="login-section">
        <form className="login-form" onSubmit={connexion}>
          {alert.show && <Alert alert={alert} hiddenAlert={showAlert} />}
          <div>
            <img src={logo} alt="opgi logo" className="logo-form-img" />
          </div>
          <div>
            <input
              type="text"
              name="code"
              id="code"
              placeholder="code"
              value={loginInfo.code}
              onChange={(e) => changeInfoLogin(e)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="mot de pass"
              value={loginInfo.password}
              onChange={(e) => changeInfoLogin(e)}
            />
          </div>
          <button type="submit" className="btn-connexion">
            connexion
          </button>
        </form>
      </section>
      <footer>
        <div className="login-footer">
          <p>OPGI - BOUMERDES</p>
          <h5>2022 © Copyrights</h5>
        </div>
      </footer>
    </>
  );
};
export default Login;
