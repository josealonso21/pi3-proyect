// src/components/Nosotros.js
import React from "react";
import "./styles/Nosotros.css";
import "./styles/navbar.css";
import lesli from "../img/lesli.jpg";
import jose from "../img/jose.JPG";
import piero from "../img/piero.jpg";

const Nosotros = () => {
  return (
    <div className="main">
      <nav>
        <a href="/.">Inicio</a>
        <a href="/./Nosotros">Nosotros</a>
      </nav>
      <div className="nosotros">
        <div className="integrante">
          <h2>Lesli Malu Marin Rodriguez</h2>
          <div>
            <div>
              <img src={lesli} alt="lesli" />
            </div>
            <div>
              <h3>Ingenieria Civil</h3>
            </div>
            <div>
              <h3>lesli.marin@utec.edu.pe</h3>
            </div>
          </div>
        </div>
        <div className="integrante">
          <h2>José Alonso Rodríguez Moscoso</h2>
          <div>
            <div>
              <img src={jose} alt="jose" />
            </div>
            <div>
              <h3>Ciencias de la Computación</h3>
            </div>
            <div>
              <h3>jose.rodriguez.m@utec.edu.pe</h3>
            </div>
          </div>
        </div>
        <div className="integrante">
          <h2>Luis Piero Crisóstomo Torres</h2>
          <div>
            <div>
              <img src={piero} alt="piero" />
            </div>
            <div>
              <h3>Ingenieria Mecatrónica</h3>
            </div>
            <div>
              <h3>luis.crisostomo@utec.edu.pe</h3>
            </div>
          </div>
        </div>

        <div className="integrante">
          <h2>Ana Cecilia Ordinola Chunga</h2>
          <div>
            <div>
              <h3>Foto:</h3>
              {/* Agrega aquí la etiqueta de imagen con la URL de la foto */}
            </div>
            <div>
              <h3>Ingenieria Bioambiental</h3>
            </div>
            <div>
              <h3>ana.ordinola@utec.edu.pe</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
