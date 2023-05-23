import React from "react";
import './serviceplan.css';
import { Contactos } from '../contactos/contactos.jsx';

export function ServicePlan(props){
    return(
        <article className="cardContent">
            <div className="divOne">
                <h2 className="titleCard">{props.name}</h2>
                <p className="priceCard">{props.price}</p>
            </div>
            <div className="linerOrange"></div>
            <div className="descripContentCard">
                <h3 className="subtitle">{props.subtitle}</h3>
                <ul className="listDescrip">
                    <li className="descripItem">{props.despOne}</li>
                    <li className="descripItem">{props.despTwo}</li>
                    <li className="descripItem">{props.despThree}</li>
                    <li className="descripItem">{props.despFour}</li>
                    <li className="descripItem">{props.despFive}</li>
                </ul>
            </div>
            <div className="contentContact">
                <Contactos
                    name="Contactar"
                />
            </div>
        </article>
    )
}