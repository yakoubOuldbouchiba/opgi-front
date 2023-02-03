import "./seccuss.css";
import { useEffect, useState } from "react";
import logo from "../../../src/OPGI-BOUMERDES.png";

const Seccuss = () => {
    return <section className="secuss-section">
        <div className="secuss-form">
            <div >
                <img src={logo} alt="opgi logo" className="seccuss-form-img" />
            </div>
            <div>
              <h3>Merci cher client, Paiement effectué</h3>  
            </div>
        </div>
    </section>
}
export default Seccuss;