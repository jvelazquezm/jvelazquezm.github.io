import React from 'react';
import { Radar } from 'react-chartjs-2';
export default class Resultados extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data:
            {
                labels: [this.props.titulos[0], this.props.titulos[1], this.props.titulos[2], this.props.titulos[3], this.props.titulos[4], this.props.titulos[5]],
                datasets: [{
                    type: 'radar',
                    label: 'Nº de vulnerabilidades',
                    data: [this.props.vulnerabilidades[0], this.props.vulnerabilidades[1], this.props.vulnerabilidades[2], this.props.vulnerabilidades[3], this.props.vulnerabilidades[4], this.props.vulnerabilidades[5]],
                    backgroundColor: [
                        'rgb(238,251,251,0.8)',
                        'rgb(238,251,251,0.8)',
                        'rgb(238,251,251,0.8)',
                        'rgb(238,251,251,0.8)',
                        'rgb(238,251,251,0.8)',
                        'rgb(238,251,251,0.8)'
                    ],
                    borderColor: [
                        '#203647',
                        '#203647',
                        '#203647',
                        '#203647',
                        '#203647',
                        '#203647'
                    ],
                    borderWidth: 5,
                }],

              
            },
            options : {
                scales: {
                    r: {
                        angleLines: {
                            display: true,
                            color:'black',
                        },
                        max:4,
                        beginAtZero:true,
                        ticks: {
                            stepSize:1,
                            backdropColor:'#7abfe4',
                            color:'black'
                          },
                    title: {
                        color:'black'
                    },
                    grid: {
                        color: 'black'
                      },
                      pointLabels: {
                        font: {
                            size: 16
                        },
                        color: 'black',
                        fontSize: 100
                      }
                    },
                },
                plugins:{
                    legend:{
                        labels:{
                            font: {
                                size: 24
                            },
                            color:'black',
                        }
                    }
                },
                responsive: true,
            }
        };
      }
      render() {
        const {detallado,width,buscar,vulnerabilidades,titulos} = this.props;
        const notfound = "No se han encontrado vulnerabilidades en este apartado";
        const vercons = "Ver consejo de buenas prácticas de seguridad"
        let disposicion;
        width > 1000 ? disposicion="horiz" : disposicion="vert";
        return (
            <div className="resultados">
                {detallado === false ?
                <>
                    <div className={"grafica"+disposicion}>
                        <Radar  className="radar" data={this.state.data} options={this.state.options}/>
                    </div>
                </>
                :
                <>
                <div className={"todo"+disposicion}>
                    <div className={"grafica"+disposicion}>
                        <Radar  className="radar" data={this.state.data} options={this.state.options}/>
                    </div>
                                        
                    <div className={"detalles"+disposicion}>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>{titulos[0]}</h3>
                        </div>
                        <div className="resultado">
                            {(buscar("actualizado").respuesta === buscar("actualizado").opciones[1] || buscar("actualizado").respuesta === buscar("actualizado").opciones[2]) ? <p><div>{buscar("actualizado").warning}</div>
                                                                 <button className="popup" onClick={()=>this.popUp("1")}>{vercons}
                                                                    <span className="popuptext" id="1">{buscar("actualizado").consejo}</span>
                                                                </button></p> : ""}

                            {vulnerabilidades[0] === 0 ? <p>{notfound}</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>{titulos[1]}</h3>
                        </div>
                        <div className="resultado">
                            {buscar("coms").respuesta.includes("RFID") ? <p><div>{buscar("coms").warning}</div></p> : ""}
                            {(buscar("seguridad").respuesta === buscar("seguridad").opciones[3] || buscar("seguridad").respuesta === buscar("seguridad").opciones[4])? <p><div>{buscar("seguridad").warning}</div></p> : ""}
                            {buscar("directamente").respuesta === buscar("directamente").opciones[0] ? <p><div>{buscar("directamente").warning}</div></p> : ""}
                            {vulnerabilidades[1] === 0 ? <p>{notfound}</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>{titulos[2]}</h3>
                        </div>
                        <div className="resultado">
                            {(buscar("categoria").respuesta === buscar("categoria").opciones[2]) || (buscar("categoria").respuesta === buscar("categoria").opciones[4]) || (buscar("categoria").respuesta ===buscar("categoria").opciones[6]) || (buscar("categoria").respuesta ===buscar("categoria").opciones[7]) ? <p className="ultimo">{buscar("categoria").warning[0] + buscar("categoria").respuesta + buscar("categoria").warning[1]}</p> : ""}{/*Salud y bienestar, Interfaz maquina humano, seguridad y sensores*/}
                            {vulnerabilidades[2] === 0 ? <p>{notfound}</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>{titulos[3]}</h3>
                        </div>
                        <div className="resultado">
                        {buscar("envnube").length !== 0 ?
                            buscar("envnube").respuesta === buscar("envnube").opciones[0] ? <p><div>{buscar("envnube").warning}</div>
                            <button className="popup" onClick={()=>this.popUp("9")}> {vercons}
                                <span className="popuptext" id="9">{buscar("envnube").consejo}</span>
                            </button></p> : ""
                        : ""}
                        {vulnerabilidades[3] === 0 ? <p>{notfound}</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>{titulos[4]}</h3>
                        </div>
                        <div className="resultado">
                            {buscar("entradas").length !==0 ?
                                <>{buscar("entradas").respuesta.includes("USB") ? <p><div>{buscar("entradas").warning}</div>
                                                                                        <button className="popup" onClick={()=>this.popUp("10")}> {vercons}
                                                                                            <span className="popuptext" id="10">{buscar("entradas").consejo}</span>
                                                                                        </button></p> : ""}</>
                                :<></>}
                            {buscar("microcam").length !==0 ?
                                <>{buscar("microcam").respuesta.includes(buscar("microcam").opciones[1]) ? <p><div>{buscar("microcam").warning[1]}</div>
                                    <button className="popup" onClick={()=>this.popUp("12")}> {vercons}
                                        <span className="popuptext" id="12">{buscar("microcam").consejo[1]}</span>
                                    </button></p> : ""}</>
                                :<></>}
                            {buscar("microcam").length !==0 ?
                                <>{buscar("microcam").respuesta.includes(buscar("microcam").opciones[0]) ? <p><div>{buscar("microcam").warning[0]}</div>
                                    <button className="popup" onClick={()=>this.popUp("12.5")}> {vercons}
                                        <span className="popuptext" id="12.5">{buscar("microcam").consejo[0]}</span>
                                    </button></p>: ""}</>
                                :<></>}
                            {buscar("actuadores").length !==0 ?
                                <>{buscar("actuadores").respuesta === buscar("actuadores").opciones[0] ? <p><div>{buscar("actuadores").warning}</div></p> : ""}</>
                                :<></>}
                            {vulnerabilidades[4] === 0 ? <p>{notfound}</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>{titulos[5]}</h3>
                        </div>
                        <div className="resultado">
                            {buscar("remoto").length !==0 ?
                                <>{buscar("remoto").respuesta === buscar("remoto").opciones[0] ? <p><div>{buscar("remoto").warning}</div>
                                    <button className="popup" onClick={()=>this.popUp("15")}> {vercons}
                                        <span className="popuptext" id="15">{buscar("remoto").consejo}</span>
                                    </button></p> : ""}</>
                                :<></>}
                            {buscar("dobleaut").length !==0 ?
                                <>{buscar("dobleaut").respuesta === buscar("dobleaut").opciones[1] ? <p><div>{buscar("dobleaut").warning}</div>
                                    <button className="popup" onClick={()=>this.popUp("16")}> {vercons}
                                        <span className="popuptext" id="16">{buscar("dobleaut").consejo}</span>
                                    </button></p> : ""}</>:<></>}
                            {buscar("opensource").length !==0 ?
                                <>{buscar("opensource").respuesta === buscar("opensource").opciones[1] ? <p><div>{buscar("opensource").warning}</div></p> : ""}</>:<></>}
                            {buscar("web").length !==0 ?
                                <>{buscar("web").respuesta === buscar("web").opciones[1] ? <p><div>{buscar("web").warning}</div>
                                    <button className="popup" onClick={()=>this.popUp("18")}> {vercons}
                                        <span className="popuptext" id="18">{buscar("web").consejo}</span>
                                    </button></p> : ""}</>:<></>}
                            {vulnerabilidades[5] === 0 ? <p>{notfound}</p>:""}
                        </div>
                    </div>
                </div>
                 
                </div>
                </>
                }    
            </div>
        )
	}

    popUp = (index) => {
        var popup = document.getElementById(index);
        popup.classList.toggle("show");
      }
}