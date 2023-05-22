import React from "react";
import { Link } from "react-router-dom";
import { Contactos } from "../contactos/contactos.jsx"
import './navbar.css'

export function NavBar(){
    return(
        <header className="header">
            {/* <img src="" alt="" />  para el logo*/}
            {/* de prueba*/}
            <h1 className="logoTitle">logo<span>web</span></h1>
            <nav className="navbar">
                <ul className="navbar_links">
                    <li className="linkSelec"><Link className="clicLink selector">Inicio</Link></li>
                    <li className="linkSelec"><Link className="clicLink">Servicios</Link></li>
                    <li className="linkSelec"><Link className="clicLink">Nosotros</Link></li>
                    <li className="linkSelec"><Link className="clicLink">Portafolio</Link></li>
                    <li className="linkSelec"><Contactos name="Contactos"/></li>
                </ul>
            </nav>
        </header>
    )
}