import React from "react";
import './generaltitle.css';

export function GeneralTitle(props){
    return(
        <h1 className="generalTitle">{props.title}</h1>
    )
}