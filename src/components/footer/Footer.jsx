import React from "react";
import "./Footer.css";
import logo from "../../asset/img/logo.png";
import fondoVerde from "../../asset/img/fondoFooter.jpg";
import whatApp from "../../asset/img/WhatsApp_icon.png";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <section className="a">
      <img src={fondoVerde} alt={fondoVerde} className="imgFondo" />
      <article className="containerFooter">
        <img src={logo} alt={logo} className="imgLogoFooter" />
        <div className="boxTitulo">
          <h2 className="h2Footer">
            Copyright © 2023 "Nombre de nuestra pyme" | Desarrollado por
            "nuestra pyme"
          </h2>
          <h2 className="h2Footer">
            TEL: (011) 15-1122-3344 • Buenos Aires • Argentina
          </h2>
        </div>
        <Link to={"https://www.whatsapp.com/"} target="_blank">
          <img src={whatApp} alt={whatApp} className="imgWaFooter" />
        </Link>
      </article>
    </section>
  );
}
