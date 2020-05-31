import React, {useState} from 'react'

import Quest from './components/Quest.jsx';
import Form from './components/Form.jsx';

const App = () => {

  const [Presupuest, setPresupuest] = useState(0)
  const [QuestV, setQuestV] = useState(true)

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
                  <Form/>
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