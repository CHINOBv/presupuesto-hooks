import React from 'react'

const Gasto = ({Name, Cant}) => {
    return (
        <li className="gastos">
            <p>
                {Name}
                <span className="gasto">$ {Cant}</span>
            </p>
        </li>
    )
}

export default Gasto
