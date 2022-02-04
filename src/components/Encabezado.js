import React from 'react';

export default class Encabezado extends React.Component {
	render(){
		const {comienzo,terminado, enviado,index} = this.props;

		return <div className="navbar">
			<i className="fas fa-question-circle"></i>
			{comienzo === false ? "App Metodología" 
			:
			terminado === false ? "Pregunta " + (index + 1)
			: 
			enviado   === false ? "Resultados"
			:
			"Vulnerabilidades encontradas"
			
			}
			
			
		</div>
	}

}