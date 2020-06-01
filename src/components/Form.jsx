import React, { useState } from "react";

import { validFormCant, validFormName } from "./ValidForm.js";
import Errorc from './Errorc.jsx';

const Form = (props) => {
  const { Presupuest } = props;

  const [Name, setName] = useState("");
  const [Cant, setCant] = useState(0);
  const [Error, setError] = useState(false);

  const addGasto = (e) => {
    e.preventDefault();
    if(Name.trim() === "" || Cant <= 0 || isNaN(Cant)){
      setError(true);
      return;
    }else {
      setError(false);
    }
  };

  return (
    <form
      onSubmit={addGasto}
    >
      {Error ? 
        <Errorc MSG="La Cantidad NO PUEDE ser menor a 1 y El nombre DEBE ser Obligatorio"/>
       : null}
      <h2>Agrega tus Gastos</h2>
      <div className="campo">
        <label htmlFor="nm">Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          id="nm"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="cant">Cantidad</label>
        <input
          type="number"
          className="u-full-width"
          id="cant"
          onChange={(e) => setCant(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        disabled={validFormCant(Cant) || validFormName(Name)}
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Form;
