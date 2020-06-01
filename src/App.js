import React, {useState} from 'react'

import Quest from './components/Quest.jsx';
import Form from './components/Form.jsx';

const App = () => {

  const [Presupuest, setPresupuest] = useState(0)
  const [QuestV, setQuestV] = useState(true)
  const [Gasto, setGasto] = useState({});
  const [Gastos, setGastos] = useState([]);

  const {Name, Cant} = Gasto;

  const addGastos = () => {
    if(Name.trim() === "" || Cant <= 0 || isNaN(Cant)){
      alert("Nose como lo has hecho, pero buen intento jaja");
      return;
    }
    setGastos([Gasto])
  }

  return (
    <>
      <div className="container App">
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          
          {QuestV ? 
            <Quest
              setPresupuest = {setPresupuest}
              setQuestV = {setQuestV}
            /> 
            :  (
              <div className="row">
                <div className="one-half column">
                  <Form
                    Presupuest = {Presupuest}
                    setGasto={setGasto}
                  />
                </div>
                <div className="one-half column">

                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App