import "./payement.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Payement = ({ infoPayement }) => {
    const location = useLocation();
    console.log(location);

    const [total, setTotal] = useState(infoPayement.amount);
    const [typePayement, setTypePayement] = useState('Total');
    const [nombreMois, setNombreMois] = useState(1);
    const [quittances, setQuittances] = useState(infoPayement.quittances);

    const handleChange = (event) => {
        setTypePayement(event.target.value)
    }

    const handleChange2 = (event) => {
        setNombreMois(event.target.value);
    }

    useEffect(function () {
        let amount = 0;
        for (let i = 0; i < nombreMois; i++) {
            amount = amount + infoPayement.quittances[i].montant;
        }
        setTotal(amount);
        setQuittances(infoPayement.quittances.slice(0, nombreMois));

    }, [nombreMois]);

    useEffect(function () {
        if (typePayement === 'Total') {
            setNombreMois(1);
            setTotal(infoPayement.amount);
            setQuittances(infoPayement.quittances);
        }
        if (typePayement === 'Par mois') {
            setNombreMois(1);
            setTotal(infoPayement.quittances[0].montant);
            setQuittances(infoPayement.quittances.slice(0, 1));
        }

    }, [typePayement]);

    const payer = async (event) => {
        event.preventDefault();
        let orderNumber = '87654346' + (new Date()).getTime();
        let res2 = (await axios.post("http://127.0.0.1:8000/api/lignesPloyerEpaiment", { "quittances": quittances, "orderNumber": orderNumber }));
        console.log(res2);
        let seccussUrl = 'http://127.0.0.1:8000/api/payement';
        let object = {
            "quitantaces": JSON.stringify(quittances).toString()
        }
        let url = `https://webmerchant.poste.dz/payment/rest/register.do?amount=${total}&language=ar&orderNumber=${orderNumber}&password=Poste2022&returnUrl=${seccussUrl}&userName=OPGI35API`;
        let res = (await axios.get(url)).data;
        //you have test if there an url valid (form url ) and all the error
        window.location.href = res.formUrl;
    }

    return <section className="payement-section">
        <form className="payement-info" onSubmit={payer}>
            <div>
                <span>Amount : </span>
                <span>{infoPayement.amount}</span>
            </div>
            <div>
                <span>Nombre de mois :</span>
                <span>{infoPayement.numberMonth}</span>
            </div>
            <div>
                <span>Comment voulez-vous payer</span>

                <input
                    type="radio"
                    value="Total"
                    checked={typePayement === 'Total'}
                    onChange={handleChange}
                /> Total

                <input
                    type="radio"
                    value="Par mois"
                    checked={typePayement === 'Par mois'}
                    onChange={handleChange}
                /> Par mois
            </div>
            <div>
            {
                typePayement === 'Par mois' && <label>
                    Pick your favorite flavor:
                    <select value={nombreMois} onChange={handleChange2}>
                        {
                            [...Array(infoPayement.numberMonth)].map((e, i) => {
                                return <option key={i + 1}>{i + 1}</option>
                            })
                        }
                    </select>
                </label>
            }
            </div>
            <div>
                <span>Montant payé : </span>
                {<span>{total}</span>}
            </div>
            <div>
                <button type="submit" className="btn-payement">
                    Payer
                </button>
            </div>

        </form>
    </section>
};
export default Payement;