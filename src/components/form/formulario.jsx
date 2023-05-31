import React, { useState } from "react";
import "./formulario.css";
import { validaciones, validateForm } from "./validaciones";
import { useEffect } from "react";
import { GeneralTitle } from "../generaltitle/generaltitle.jsx"

export function Form(props) {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(true);
  const [inputValidacion, setInputValidacion] = useState({
    name: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  useEffect(() => {
    if (validateForm(error, inputValidacion)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [error, inputValidacion, setDisabled]);

  function handleChange(e) {
    const { name, value } = e.target;

    setInputValidacion({
      ...inputValidacion,
      [name]: value.trim(),
    });
    setError((prev) => ({
      ...prev,
      [name]: validaciones(name, value),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInputValidacion({
      name: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
  }

  return (
    <div className="container">
      {/* <h2 className="h2Form">Hablemos</h2> */}
      <GeneralTitle 
        title="¡Hablemos!"
      />
      <div className="containerBox">
        <form className="form" onSubmit={handleSubmit}>
          <div className="boxForm">
            <label className="nameInput" htmlFor="name">Nombre</label>
            <input
              className="input"
              type="text"
              name="name"
              value={inputValidacion.name}
              onChange={handleChange}
            />
            {error.name && <span>{error.name}</span>}
          </div>
          <div className="boxForm">
            <label className="nameInput" htmlFor="email">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={inputValidacion.email}
              onChange={handleChange}
            />
            {error.email && <span>{error.email}</span>}
          </div>
          <div className="boxForm">
            <label className="nameInput" htmlFor="telefono">Telefono</label>
            <input
              className="input"
              type="text"
              name="telefono"
              value={inputValidacion.telefono}
              onChange={handleChange}
            />
            {error.telefono && <span>{error.telefono}</span>}
          </div>
          <div className="boxForm ">
            <label className="nameInput" htmlFor="mensaje">Mensaje</label>
            <textarea
              className="input inputMensaje"
              name="mensaje"
              value={inputValidacion.mensaje}
              onChange={handleChange}
            />
            {error.mensaje && <span>{error.mensaje}</span>}
          </div>
          <button type="submit" disabled={disabled} className={disabled? "btnDisable": "btnEnable"}>
            <p className="nameButton">Enviar formulario</p>
          </button>
        </form>
      </div>
    </div>
  );
}
