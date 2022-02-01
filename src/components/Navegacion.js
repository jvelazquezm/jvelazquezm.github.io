import React from 'react';
import ReactToPrint from 'react-to-print';
import PrintResultados from './PrintResultados';
import PrintVulnerabilidades from './PrintVulnerabilidades';

export default class Navegacion extends React.Component {
	render() {
		const {index,pasos,revisando,comienzo,terminado,enviado,detallado,revisar,buscar, vulnerabilidades, width} = this.props;
		return <div className="actionbar">
			{comienzo === false ?
				<button className="actions" onClick={this.props.comenzar}>Comenzar</button>
				: 
				terminado === false ? 
					<>
							{(index === (0) || revisando === true) ? <></>: <button className="actions" onClick={this.clickAnterior}>Anterior</button> }
							{(index === (pasos.length - 1) || revisando === true) ? <></>: <>{((pasos[index].respuesta !== []) && (pasos[index].respuesta.length !== 0)) ? <button className="actions" onClick={this.clickSiguiente}>Siguiente</button> : <button className="disabled" disabled>Siguiente</button>}</>}
							{(index !== (pasos.length - 1) || revisando === true) ? <></>: <>{((pasos[index].respuesta !== []) && (pasos[index].respuesta.length !== 0)) ? <button className="actions" onClick={this.props.enviar}>Enviar</button> : <button className="disabled" disabled>Enviar</button>}</>}
							{(revisando === true) ? <button className="actions" onClick={this.props.enviar}>Volver</button>: <></>}
					</>
					: 
					enviado === false ?
					<>

						<div style={{display: "none"}}>
                    	<PrintResultados 
							ref={el => (this.componentRef = el)}
							revisar={revisar}
							buscar={buscar}
                    	/>
                    	</div>
						<>
							<ReactToPrint
								trigger={() => {
								// NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
								// to the root node of the returned component as it will be overwritten.
								return <button className="actions" href="#">Imprimir resultados</button>;
								}}
								content={() => this.componentRef}
							/>
						</>
						<button className="actions" onClick={this.props.comprobar}>Enviar respuestas</button>
					</>
						:
						<>
							<div style={{display: "none"}}>
								<PrintVulnerabilidades
									ref={el => (this.componentRef = el)}
									vulnerabilidades={vulnerabilidades}
									buscar={buscar}
									detallado={detallado}
									width={width}
								/>
							</div>
							<button className="actions" onClick={this.props.volver}>Volver</button>
							<>
								<ReactToPrint
									trigger={() => {
									// NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
									// to the root node of the returned component as it will be overwritten.
									return <button className="actions" href="#">Imprimir resultados</button>;
									}}
									content={() => this.componentRef}
								/>
							</> 
							{detallado === false ? <button className="actions" onClick={this.props.detallar}>Mostrar detalles</button> : <button className="actions" onClick={this.props.detallar}>Mostrar menos</button>}	 
						</>
			}
		</div>
			
	}
	clickSiguiente = () => {
		if(this.props.pasos[this.props.index].respuesta !== "" && this.props.index !== (this.props.pasos.length - 1))
			this.props.cambiarPregunta(this.props.index+1);
	}
	clickAnterior = () => {
			this.props.cambiarPregunta(this.props.index-1)
	}

}