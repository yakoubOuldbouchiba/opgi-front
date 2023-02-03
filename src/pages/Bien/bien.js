import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

import "./bien.css";
const Bien = ({ bien, setInfoPayement }) => {
  const [locataires, setLocataires] = useState([]);
  const [quittances, setQuittances] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/locataire/" + bien.contratID)
      .then((res) => res.json())
      .then((data) => data.data)
      .then((data) => setLocataires(data));
  }, [bien]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/qloye/" + bien.id)
      .then((res) => res.json())
      .then((data) => data.data)
      .then((data) => {
        setQuittances(data);
        return data;
      })
      .then((data) => {
        let montantTotal = 0.0;
        data.forEach((item) => {
          montantTotal = montantTotal + item.montant;
        });
        return montantTotal;
      })
      .then((montant) => {
        setTotal(montant);
      });
  }, [bien]);
  const connexion = (event) => {
    event.preventDefault();
    setInfoPayement({
      amount: total,
      numberMonth: quittances.length,
      quittances:quittances
    })
    navigate("/Payement");
  }
  return (
    <>
      <nav className="dashbord-nav">
        <button
          className="btn"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaSignOutAlt />
        </button>
      </nav>
      <section className="dashbord-section">
        <form onSubmit={connexion}>
          <div className="bien-info">
            <h1>Locataires</h1>
            <table id="locataires">
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Date de naissance</th>
                <th>Lieu de naissance</th>
              </tr>
              <tbody>
                {locataires.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.nom}</td>
                      <td>{item.prenom}</td>
                      <td>{item.dateNais}</td>
                      <td>{item.lieuNais}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h1>Bien Information</h1>
            <div>
              <samp>Code : </samp>
              {bien.code}
            </div>
            <div>
              <samp>Bat : </samp> {bien.bat}
            </div>
            <div>
              <samp>N porte : </samp>
              {bien.porte}
            </div>
            <div>
              <samp>Etage : </samp> {bien.etage}
            </div>
            <div>
              <samp>Type : </samp> {bien.type}
            </div>
            <div>
              <samp>Nom de cité : </samp> {bien.nom_cite}
            </div>
            <h1>Contract Information</h1>
            <div>
              <samp>LP : </samp> {bien.lp}
            </div>
            <div>
              <samp>CL : </samp> {bien.cl}
            </div>
            <div>
              <samp>Abatement : </samp> {bien.abatement}
            </div>
            <h4>Quittances impayées</h4>
            <table id="quittances">
              <tr>
                <th>Mois</th>
                <th>Loyer principal </th>
                <th>Charges locatives </th>
                <th>Abatement</th>
                <th>Montant</th>
              </tr>
              <tbody>
                {quittances.map((q, index) => {
                  return (
                    <tr key={index}>
                      <td>{q.ech}</td>
                      <td>{q.lp}</td>
                      <td>{q.cl}</td>
                      <td>{q.motantAbat}</td>
                      <td>{q.montant}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <h1>Total hors taxe :</h1>
                  </td>
                  <td>{total}</td>
                </tr>
              </tfoot>
            </table>
            <div>
              <button type="submit" className="btn-effectuer-payement">
                Effectuer un Payement
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Bien;
