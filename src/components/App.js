
import React from 'react';
import Encabezado from './Encabezado';
import Cuerpo from './Cuerpo';
import Navegacion from './Navegacion';
import Resultados from './Resultados';
import Results from './Results';
import Vulnerabilidades from './Vulnerabilidades';
import Presentacion from './Presentacion'
import {pasos} from '../assets/pasos.js';
//import {pasos} from '../assets/pasos_ingles.js';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pasosiniciales : [
        ...pasos
      ],
      pasos:[
        ...pasos
      ],
      preguntaActual: 0,
      comienzo : false,
      terminado : false,
      enviado:false,
      revisando:false,
      detallado:false,
      vulnerabilidades: [0,0,0,0,0,0],
      titulos:["Firmware","Comunicaciones","Categoría","Tratamiento de datos","Interfaz física","Accesibilidad","App Metodología","Pregunta ","Resultados","Vulnerabilidades encontradas"],

      height: window.innerHeight, 
      width: window.innerWidth
    };
  }
  componentDidMount() {
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth
    });
  }

  cambiarPregunta = (index) => {
    this.setState({
      preguntaActual : index,
    });
  }
  responder = (index, respuesta) => {
    let pasos = this.state.pasos.map((paso,i) => {
      return {...paso,
        respuesta : index === i ? respuesta : paso.respuesta}
    });
    const categoria = pasos.find(paso => (paso.pregunta === this.buscar("categoria").pregunta));
    if(index >= pasos.indexOf(categoria)){
      const preguntasGenerales = pasos.filter(paso => ((paso.fase === "General")));

      const nube = pasos.find(paso => paso.pregunta === this.buscar("conexnube").pregunta) ||[];
      const sensores = pasos.find(paso => paso.pregunta === this.buscar("sensores").pregunta) || [];
      const remoto = pasos.find(paso => paso.pregunta === this.buscar("remoto").pregunta) || [];
      const conjunto = [nube,sensores,remoto]
      let preguntasCategoría = pasos.filter(paso => ((paso.fase === "Especifica")));

      if(index === pasos.indexOf(categoria)){

        preguntasCategoría = this.state.pasosiniciales.filter(paso => ((paso.fase === "Especifica" && paso.categoria.includes(categoria.respuesta))));
      }
      conjunto.map((pregunta,i) =>{
        if(pregunta !== []){
          if(pregunta.respuesta === "No")
            if(i===2){
              preguntasCategoría = preguntasCategoría.filter(paso => (paso.index !== pregunta.index+1 && paso.index !== pregunta.index+2 && paso.index !== pregunta.index+3));
            }
            else
              preguntasCategoría = preguntasCategoría.filter(paso => paso.index !== pregunta.index+1);
          else{
            if((pregunta.respuesta === "Sí" || pregunta.respuesta === "Yes") && !preguntasCategoría.some(paso => paso.index === pregunta.index+1)){
              preguntasCategoría.push(this.state.pasosiniciales.find(paso => paso.index === (pregunta.index+1)))
              if(i===2){
                preguntasCategoría.push(this.state.pasosiniciales.find(paso => paso.index === (pregunta.index+2)))
                preguntasCategoría.push(this.state.pasosiniciales.find(paso => paso.index === (pregunta.index+3)))
              }
              preguntasCategoría.sort((a, b) => (a.index - b.index))
            }
          }
        }
      }
      );
      const preguntasCategorizadas = preguntasGenerales.concat(preguntasCategoría);
      console.log(preguntasCategorizadas)
      this.setState({
        pasos: preguntasCategorizadas
      });
    }
    else{
      this.setState({
        pasos: pasos
      })
    }
  }

  enviar = () => {
    if (window.confirm("¿Estás seguro de que quieres enviar tus respuestas? No podrás modficiar la categoría de tu dispositivo.")){
      this.setState({
        terminado: true
      });
    } 
  }

  comprobar = () => {
    const {pasos} = this.state;
    const vulnerabilidades = [0,0,0,0,0,0]
    if (this.buscar("actualizado").respuesta === this.buscar("actualizado").opciones[1] || this.buscar("actualizado").respuesta === this.buscar("actualizado").opciones[1]) vulnerabilidades[0]++;
    if (this.buscar("coms").respuesta.includes("RFID")) vulnerabilidades[1]++;
    if (this.buscar("seguridad").respuesta ===this.buscar("seguridad").opciones[3] || this.buscar("seguridad").respuesta === this.buscar("seguridad").opciones[4]) vulnerabilidades[1]++;
    if (this.buscar("directamente").respuesta === this.buscar("directamente").opciones[0]) vulnerabilidades[1]++;
    if ((this.buscar("categoria").respuesta === this.buscar("categoria").opciones[2]) || (this.buscar("categoria").respuesta === this.buscar("categoria").opciones[4]) || (this.buscar("categoria").respuesta ===this.buscar("categoria").opciones[6]) || (this.buscar("categoria").respuesta ===this.buscar("categoria").opciones[7])) vulnerabilidades[2]++;
    if (this.buscar("envnube").length !== 0 && this.buscar("envnube").respuesta === this.buscar("envnube").opciones[0]) vulnerabilidades[3]++;
    if (this.buscar("entradas").length !==0 && this.buscar("entradas").respuesta.includes("USB")) vulnerabilidades[4]++;
    if (this.buscar("microcam").length !==0 && this.buscar("microcam").respuesta.includes(this.buscar("microcam").opciones[1])) vulnerabilidades[4]++;
    if (this.buscar("microcam").length !==0 && this.buscar("microcam").respuesta.includes(this.buscar("microcam").opciones[0])) vulnerabilidades[4]++;
    if (this.buscar("actuadores").length !==0 && this.buscar("actuadores").respuesta === this.buscar("actuadores").opciones[0]) vulnerabilidades[4]++;
    if (this.buscar("remoto").length !==0 && this.buscar("remoto").respuesta === this.buscar("remoto").opciones[0]) vulnerabilidades[5]++;
    if (this.buscar("dobleaut").length !==0 && this.buscar("dobleaut").respuesta === this.buscar("dobleaut").opciones[1]) vulnerabilidades[5]++;
    if (this.buscar("opensource").length !==0 && this.buscar("opensource").respuesta === this.buscar("opensource").opciones[1]) vulnerabilidades[5]++;
    if (this.buscar("web").length !==0 && this.buscar("web").respuesta === this.buscar("web").opciones[1]) vulnerabilidades[5]++;

    const preguntasSinRespuesta = pasos.filter((paso,i) => (paso.respuesta === "" || paso.respuesta.length === 0))
    if(preguntasSinRespuesta.length !== 0)
      window.alert("Las siguientes preguntas no se han respondido:"
      + preguntasSinRespuesta.map(paso => {return "\n"+paso.pregunta})
      )
    else{
      this.setState({
        enviado: true,
        vulnerabilidades: vulnerabilidades
      })
      console.log(vulnerabilidades)
    }


  }
  volver = () => {
    this.setState({
      enviado: false,
      vulnerabilidades: [0,0,0,0,0,0]
    })
  }
  comenzar = () => {
    this.setState({
      comienzo: true
    })
  }
  revisar = (alias) => {
    let indice = this.state.pasos.find(paso => paso.alias === alias) || [];
    if(indice.length !== 0){
      this.setState({
        preguntaActual : this.state.pasos.indexOf(indice),
        terminado : false,
        revisando: true
      })
    }
    else{
        indice = this.state.pasosiniciales.find(paso => paso.alias === alias)
        let pasos = this.state.pasos
        pasos.push(indice)
        pasos.sort((a, b) => (a.index - b.index))
        this.setState({
          pasos: pasos,
          preguntaActual : pasos.indexOf(indice),
          terminado : false,
          revisando: true
        })
    }

  }
  detallar = () => {
    this.setState({
      detallado: !this.state.detallado
    })
  }


  buscar = (alias) => {
    const temporal = this.state.pasos.find(paso => paso.alias === alias) ||[];
      return temporal;
}  
  

  render(){
    const {preguntaActual,pasos,terminado,enviado,comienzo,revisando,vulnerabilidades,detallado,width, titulos} = this.state;
    return (
      <div className="app">
        <Encabezado
          comienzo={comienzo}
          terminado={terminado}
          enviado={enviado}
          index={preguntaActual}
          titulos={titulos}
        />
        {comienzo === false ? 
        <Presentacion/>
        :terminado === false ? 
        <>
          <Cuerpo
            index={preguntaActual}
            pasos={pasos}
            responder={this.responder}
            cambiarPregunta={this.cambiarPregunta}
            enviar={this.enviar}
            revisando={revisando}
          />
        </> 
        : <>{enviado === false ?
            <Resultados
              revisar={this.revisar}
              buscar={this.buscar}
              titulos={titulos}
            />
          : 
          <Vulnerabilidades
            vulnerabilidades={vulnerabilidades}
            buscar={this.buscar}
            detallado={detallado}
            width={width}
            titulos={titulos}
          />}
          </>}
         {
        }
          <Navegacion
            index={preguntaActual}
            pasos={pasos}
            cambiarPregunta={this.cambiarPregunta}
            enviar={this.enviar}
            revisando={revisando}
            comienzo={comienzo}
            terminado={terminado}
            enviado={enviado}
            detallar ={this.detallar}
            volver ={this.volver}
            comprobar={this.comprobar}
            comenzar={this.comenzar}
            detallado={detallado}
            detallar ={this.detallar}
            revisar={this.revisar}
            buscar={this.buscar}
            vulnerabilidades={vulnerabilidades}
						buscar={this.buscar}
						detallado={detallado}
						width={width}
          />
      </div>
    );
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

}



