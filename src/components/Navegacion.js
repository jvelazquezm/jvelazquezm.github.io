import React from 'react';
import ReactToPrint from 'react-to-print';
import PrintResultados from './PrintResultados';
import PrintVulnerabilidades from './PrintVulnerabilidades';
import house from '../assets/icons8-home.svg';
import restart from '../assets/icons8-restart.svg';

export default class Navegacion extends React.Component {
	render() {
		const {index,pasos,revisando,comienzo,terminado,enviado,detallado,revisar,buscar, vulnerabilidades, width,titulos,revisarvolver} = this.props;
		return <div className="actionbar">
			{comienzo === false ?
			<>
				<button className="actions" onClick={() => window.location.href='https://soniasoleracotanilla.github.io/RAYUELA/'}>Back Home</button>
				<button className="actions" onClick={this.props.comenzar}>Start</button>
			</>
				: 
				terminado === false ? 
					<>
							<button className="actions2" onClick={() => window.location.href='https://soniasoleracotanilla.github.io/RAYUELA/'}>
								<img src={house} alt=""></img>
							</button>
							<button className="actions2" onClick={this.props.reiniciar}>
								<img src={restart} alt=""></img>
							</button>
							{(index === (0) || revisando === true) ? <></>: <button className="actions" onClick={this.clickAnterior}>Previous</button> }
							{(index === (pasos.length - 1) || revisando === true) ? <></>: <>{((pasos[index].respuesta !== []) && (pasos[index].respuesta.length !== 0)) ? <button className="actions" onClick={this.clickSiguiente}>Next</button> : <button className="disabled" disabled>Next</button>}</>}
							{(index !== (pasos.length - 1) || revisando === true) ? <></>: <>{((pasos[index].respuesta !== []) && (pasos[index].respuesta.length !== 0)) ? <button className="actions" onClick={this.props.enviar}>Submit</button> : <button className="disabled" disabled>Submit</button>}</>}
							{(revisando === true) ? <button className="actions" onClick={revisarvolver}>Return</button>: <></>}
					</>
					: 
					enviado === false ?
					<>

						<div style={{display: "none"}}>
                    	<PrintResultados 
							ref={el => (this.componentRef = el)}
							revisar={revisar}
							buscar={buscar}
							titulos={titulos}
                    	/>
                    	</div>
						<button className="actions2" onClick={() => window.location.href='https://soniasoleracotanilla.github.io/RAYUELA/'}>
								<img src={house} alt=""></img>
						</button>
						<button className="actions2" onClick={this.props.reiniciar}>
								<img src={restart} alt=""></img>
						</button>
						<>
							<ReactToPrint
								trigger={() => {
								// NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
								// to the root node of the returned component as it will be overwritten.
								return <button className="actions" href="#">Print results</button>;
								}}
								content={() => this.componentRef}
							/>
						</>

						<button className="actions" onClick={this.props.comprobar}>Submit answers</button>
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
									titulos={titulos}
								/>
							</div>
							<button className="actions2" onClick={() => window.location.href='https://soniasoleracotanilla.github.io/RAYUELA/'}>
								<img src={house} alt=""></img>
							</button>
							<button className="actions2" onClick={this.props.reiniciar}>
								<img src={restart} alt=""></img>
							</button>
							<button className="actions" onClick={this.props.volver}>Return</button>
							<>
								<ReactToPrint
									trigger={() => {
									// NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
									// to the root node of the returned component as it will be overwritten.
									return <button className="actions" href="#">Print results</button>;
									}}
									content={() => this.componentRef}
								/>
							</> 
							{detallado === false ? <button className="actions" onClick={this.props.detallar}>Detailed view</button> : <button className="actions" onClick={this.props.detallar}>Simple view</button>}	 
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