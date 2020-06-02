import React, { useState, useEffect } from "react";

import Quest from "./components/Quest.jsx";
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";
import ControlPres from "./components/ControlPres.jsx";

const App = () => {
  const [Presupuest, setPresupuest] = useState(0);
  const [Rest, setRest] = useState(0);
  const [QuestV, setQuestV] = useState(true);
  const [Gasto, setGasto] = useState({});
  const [Gastos, setGastos] = useState([]);
  const [AddGasto, setAddGasto] = useState(false);

  useEffect(() => {
    if (AddGasto) {
      const listGastos = [...Gastos, Gasto];
      setGastos(listGastos);

      const presRest = Rest - Gasto.Cant;
      setRest(presRest); 

      setAddGasto(false);
    }
  }, [AddGasto, Gasto, Gastos, Rest]);

  return (
    <>
      <div className="container App">
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {QuestV ? (
            <Quest
              setPresupuest={setPresupuest}
              setQuestV={setQuestV}
              setRest={setRest}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  Presupuest={Presupuest}
                  setGasto={setGasto}
                  setAddGasto={setAddGasto}
                />
              </div>
              <div className="one-half column">
                <List Gastos={Gastos} />
                <ControlPres Presupuest={Presupuest} Rest={Rest} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
