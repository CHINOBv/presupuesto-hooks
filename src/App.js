import React from 'react'

import Quest from './components/Quest.jsx';

const App = () => {
  return (
    <>
      <div className="container App">
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Quest/>
        </div>
      </div>
    </>
  )
}

export default App