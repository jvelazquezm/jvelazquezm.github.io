import React from 'react';
import Pregunta from './Pregunta';
import Respuesta from './Respuesta';
import Foto from './Foto';
export default class Cuerpo extends React.Component {
	render() {
        const {index,pasos,responder,cambiarPregunta,enviar,revisando} = this.props;
        const paso = pasos[index];
		return <div className="cuerpo">
      <div className="preguntayattachment">
        <Pregunta 
            index={index}
            pregunta={paso.pregunta}
          />
          <Foto
            foto = {paso.foto}
          />
      </div>

        <Respuesta
          index={index}
          paso={paso}
          pasos={pasos}
          responder = {responder}
          cambiarPregunta={cambiarPregunta}
          enviar={enviar}
          revisando={revisando}
        />
	        </div>
	}

}