// src/components/Home.js
import React from "react";
import "./styles/home.css"; // Importar el archivo de estilos CSS
import Carousel from "./Carousel"; // Importar el componente Carousel
import filtro from "../img/filtro.jpg";
import malla from "../img/malla.jpg";
import total from "../img/total.jpg";
import tubo from "../img/tubo.jpg";

const Home = () => {
  const carouselImages = [filtro, malla, total, tubo];

  return (
    <div className="main">
      <nav>
        <a href="/.">Inicio</a>
        <a href="/./Nosotros">Nosotros</a>
      </nav>
      <div className="carrusel">
        <Carousel images={carouselImages} />
        <h3>Malla Captadora de Humedad</h3>
      </div>
      <div className="resumen">
        Para los parques que necesiten riego, nuestro producto se va a encargar
        de retener agua del ambiente con la intención de que esta agua sea usado
        en el riego del mismo, además de ello, ya no será necesario que los
        trabajadores de las municipalidades lleven las cisternas y tengan que
        regarlos, y así se puede ahorrar grandes cantidades de agua ya que este
        producto está destinado para parques de 3 distritos costeros.
      </div>
      <h3>Precio</h3>
      <p>1200 - 1700 soles</p>
      <h3>Agua generada</h3>
      <p>8 - 12 litros diarios</p>
    </div>
  );
};

export default Home;
