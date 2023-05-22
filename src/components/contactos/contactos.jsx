import React from "react";
import { Link } from "react-router-dom";
import './contactos.css';

export function Contactos(props){
    return (
        <Link className="styleContac">
            {props.name}
        </Link>
    )
}