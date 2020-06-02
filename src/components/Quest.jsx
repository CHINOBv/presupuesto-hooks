import React, { useState } from "react";

import { validFormCant } from "./ValidForm.js";
import Errorc from "./Errorc.jsx";

const Quest = ({ setPresupuest, setQuestV, setRest }) => {
  const [Cant, setCant] = useState(0);
  const [Error, setError] = useState(false);

  const addPresupuest = (e) => {
    e.preventDefault();

    if (Cant <= 0 || isNaN(Cant)) {
      setError(true);

      return;
    } else {
      setError(false);
      setPresupuest(Cant);
      setRest(Cant);
      setQuestV(false);
    }
  };

  return (
    <>
      <h2>Coloca Tu Presupuesto</h2>
      <form onSubmit={addPresupuest}>
        {Error ? <Errorc MSG="El Presupuesto NO PUEDE ser menor a 1" /> : null}
        <input
          autoFocus
          className="u-full-width"
          type="number"
          placeholder="Ingresa Tu Presupuesto"
          onChange={(e) => setCant(parseInt(e.target.value, 10))}
        />
        <input
          disabled={validFormCant(Cant)}
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
};

export default Quest;
