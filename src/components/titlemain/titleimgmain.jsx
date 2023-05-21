import React from "react";
import './titleimgmain.css';
import ImgMain from '../../asset/img/Leonardo_Diffusion_Start_by_creating_an_image_of_a_person_sitt_1-removebg-preview.png'

export function TitleImgMain(){
    return(
        <section className="contentTitle">
            <article className="contentTitleText">
                <h1 className="titleMain">Desarrollamos sitios web como te gusten</h1>
                <h3 className="titleAnimated">Texto para animar con letras</h3>
            </article>
            <article className="contentImg">
                <img className="contentImgMain" src={ImgMain} alt="imgMain" />
            </article>
        </section>
    )
}