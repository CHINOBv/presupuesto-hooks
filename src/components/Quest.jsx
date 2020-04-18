import React, { useState } from 'react';

const Quest = () => {
	
	const [Cant, setCant] = useState(0);
	const [Error, setError] = useState(false);
	
	const addPresupuest = e => {
		e.preventDefault();

		if(Cant <= 0 || isNaN(Cant)){
			setError(true);
			return;
		}
	}
	
	const validForm = () => {

		let noValid = Cant === 0 || isNaN(Cant);

		if(isNaN(Cant) || Cant === 0){
			
			return noValid;
		}

	}

	return (
		<>
			<h2>Coloca Tu Presupuesto</h2>
			<form
				onSubmit={addPresupuest}
			>
				{Error ? <p className="alert alert-danger error"> El Presupuesto NO PUEDE ser menor a 1</p> : null}
				<input 
					className="u-full-width"
					type="number" 
					placeholder="Ingresa Tu Presupuesto"
					onChange={e => setCant(parseInt(e.target.value, 10))}
				/>
				<input 
					disabled={validForm()}
					type="submit"
					className="button-primary u-full-width"
					value="Definir Presupuesto"
				/>
			</form>
		</>
	)
}

export default Quest