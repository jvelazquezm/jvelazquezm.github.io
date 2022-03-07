import React from 'react';
//import {useTransition, animated} from 'react-spring';


export default class Encabezado extends React.Component {
	render(){
		const {comienzo,terminado, enviado,index, titulos} = this.props;
		const encabezado = <div className="navbar">
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
		return encabezado
	}

}

/*export default function Encabezado(props) {
	const {comienzo,terminado, enviado,index, titulos} = props;
	const encabezado = <><i className="fas fa-question-circle"></i>
							{comienzo === false ? titulos[6] 
							:
							terminado === false ? titulos[7] + (index + 1)
							: 
							enviado   === false ? titulos[8]
							:
							titulos[9]						
							}</>

	const transition = useTransition(encabezado,{
		from: {x:1000, y:0, opacity:0},
		enter: {x:0, y:0, opacity: 1}
	});
	return <div className="navbar">
			{transition ((style) =>
				(((comienzo && terminado) === true))  ? <animated.div style={style}>{encabezado}</animated.div> : encabezado
			)}
	</div> 

}*/