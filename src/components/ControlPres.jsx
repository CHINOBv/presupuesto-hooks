import React from 'react'

import { revisarPresupuesto } from '../helper.js';

const ControlPres = ({Presupuest, Rest}) => {

  return (
    <>
      <div className="alert alert-primary">
        Presupuesto: $ {Presupuest}
      </div>
      <div className={revisarPresupuesto(Presupuest,Rest)}>
        Restate : $ {Rest}
      </div>
    </>
  )
}

export default ControlPres
