import React from "react";
import './imgFond.css';
import fontImg  from '../../asset/img/fondo-verde-abstracto-grunge.jpg';

export function ImgFond(){
    return(
        <section className="content-img">
            <img className="imgFond" src={fontImg} alt="img" />
        </section>
    )
}