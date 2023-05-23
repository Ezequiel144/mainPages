import React from "react";
import './technologi.css';
/* import nodejs from '../../asset/icon/node-js-removebg-preview.png' */

export function Technologi({img}){
    return(
        <div className="imgContentDiv">
            <img className="imgIcon" src={`${img}`} alt="icon" />
            
        </div>       
    )
}