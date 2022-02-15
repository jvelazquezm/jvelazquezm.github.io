import React from 'react';

export default class Encabezado extends React.Component {
	render(){
		const {comienzo,terminado, enviado,index, titulos} = this.props;

		return <div className="navbar">
			<i className="fas fa-question-circle"></i>
			{comienzo === false ? titulos[6] 
			:
			terminado === false ? titulos[7] + (index + 1)
			: 
			enviado   === false ? titulos[8]
			:
			titulos[9]
			
			}
			
			
		</div>
	}

}