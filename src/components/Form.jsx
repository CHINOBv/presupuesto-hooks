import React from "react";

const Form = (props) => {
  return (
    <form>
      <h2>Agrega tus Gastos</h2>
      <div className="campo">
        <label htmlFor="nm">Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          id="nm"
        />
      </div>
      <div className="campo">
        <label htmlFor="cant"></label>
        <input type="number" className="u-full-width" id="cant" />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Form;
