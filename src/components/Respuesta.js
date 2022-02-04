import React from 'react' ;
import help from '../assets/question-circle-solid.svg'

export default class Respuesta extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			respuestas : []
		}
      }
	  
      render(){
		  const {index,paso} = this.props;
		  const {pregunta,respuesta,tipo,opciones} = paso;
            return (
				<div className="respuesta">
				{tipo === "Libre" ?
				
					<input className="input" type = "text" 
						value = {respuesta || ''} 
						onChange ={(e)=> this.props.responder(index, e.target.value)}
						placeholder ="Escriba aquí su respuesta"
						onKeyDown={this.handleKeyDown}
					/>
				:
				tipo === "Opciones" ?
				
					opciones.map((opcion,i,j) => {
						let ayuda = paso.ayuda || [];
						let pop;
						ayuda === [] ? pop = [] : (pop = ayuda[i] || []);
						return(
							<>{(opcion === respuesta)?
							<div className="radio" key={i+j+index}>
								<input  
									key={i+j+index}
									type = "radio" 
									id ={opcion}
									name = {pregunta}
									onClick ={()=> this.props.responder(index, opcion)}
									defaultChecked
									onKeyDown={this.handleKeyDown}
								/>
								<label htmlFor={opcion} className="label">
									{opcion}					
								</label>
								{ (ayuda !== [] && pop.length !== 0)  ?
									<button className="popup2" onClick={()=>this.popUp(i)}>
										<img src={help}/>
										<span className="popuptext" id={i}>{paso.ayuda[i]}</span>
									</button>
									: <></>
								}
							</div>
							: 
							<div className="radio" key={i+j+index}>
								<input  
									key={i+j+index}
									type = "radio" 
									id ={opcion}
									name = {pregunta}
									onClick ={()=> this.props.responder(index, opcion)}
									onKeyDown={this.handleKeyDown}
								/>
								<label htmlFor={opcion} className="label">
									{opcion}	
								</label>
								{ (ayuda !== [] && pop.length !== 0)  ?
									<button className="popup2" onClick={()=>this.popUp(i)}>
										<img src={help}/>
										<span className="popuptext" id={i}>{paso.ayuda[i]}</span>
									</button>
									: <></>
								}

							</div>
							}</>
						)
					})
				
				:
			
					opciones.map((opcion,i,j) => {
						let ayuda = paso.ayuda || [];
						let pop;
						ayuda === [] ? pop = [] : (pop = ayuda[i] || []);
						return(
							<>{(respuesta.includes(opcion))?
							<div className="checkbox" key={i+j+index}>
								<input 
									key={i+j+index}
									type = "checkbox" 
									id ={opcion}
									name = {pregunta}
									onClick ={(e)=> this.guardarRespuesta(opcion,e)}
									defaultChecked
									onKeyDown={this.handleKeyDown}
								/>
								<label htmlFor={opcion}>
									{opcion}
								</label>
								{ (ayuda !== [] && pop.length !== 0) ?
									<button className="popup2" onClick={()=>this.popUp(i)}>
										<img src={help}/>
										<span className="popuptext" id={i}>{paso.ayuda[i]}</span>
									</button>
									: <></>
								}
							</div>
							: 
							<div className="checkbox" key={i+j+index}>
								<input 
									key={i+j+index}
									type = "checkbox" 
									id ={opcion}
									name = {pregunta}
									onClick ={(e)=> this.guardarRespuesta(opcion,e)}
									onKeyDown={this.handleKeyDown}
								/>
								<label htmlFor={opcion}>
									{opcion}
								</label>
								{ (ayuda !== [] && pop.length !== 0)  ?
									<button className="popup2" onClick={()=>this.popUp(i)}>
										<img src={help}/>
										<span className="popuptext" id={i}>{paso.ayuda[i]}</span>
									</button>
									: <></>
								}
							</div>
							}</>
						)
					})

				}

				</div>

	

    )}

	guardarRespuesta = (respuesta, checkboxElement) =>{
			if (checkboxElement.target.checked){
				this.props.paso.respuesta.push(respuesta);
				this.props.responder(this.props.index, this.props.paso.respuesta);

	
			}
			else{
				let index = this.props.paso.respuesta.indexOf(respuesta);
				if(this.props.paso.respuesta.length !== 0 && index !== -1){
					this.props.paso.respuesta.splice(index,1);
					this.props.responder(this.props.index, this.props.paso.respuesta);
				}
				
			}

	}
	handleKeyDown= (e) => {
        if (e.key === 'Enter') {
			if (this.props.revisando !== true){
				
				if(this.props.paso.respuesta !== ""){
					if (this.props.index === (this.props.pasos.length - 1))
						this.props.enviar()
					else
						this.props.cambiarPregunta(this.props.index+1)
				}
					

					
			}

        }
      }
	  popUp = (index) => {
        var popup = document.getElementById(index);
        popup.classList.toggle("show");
      }

}