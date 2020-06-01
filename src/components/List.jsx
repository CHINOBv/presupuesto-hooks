import React from 'react'

import Gasto from './Gasto';

const List = ({Gastos}) => {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {Gastos.map( gasto => (
                <Gasto 
                    Name={gasto.Name} 
                    Cant={gasto.Cant}
                    key={gasto.id}
                />
            ))}
        </div>
    )
}

export default List
