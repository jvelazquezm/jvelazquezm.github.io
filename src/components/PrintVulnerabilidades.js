import React from 'react';
import { Radar } from 'react-chartjs-2';
export default class Resultados extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data:
            {
                labels: ['Firmware', 'Comunicaciones', 'Categoría', 'Tratamiento de datos', 'Interfaz física', 'Accesibilidad'],
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
        const {detallado,width,buscar,vulnerabilidades} = this.props;
        let disposicion;
        width > 1000 ? disposicion="horiz" : disposicion="vert";
        return (
            <div className="resultados">
                <div className="print">
                    <h1 className="centrado">Vulnerabilidades de seguridad y privacidad encontradas</h1>
                </div>
                <>
                <div className={"todovert"}>           
                    <div className={"detallesvert"}>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>Firmware</h3>
                        </div>
                        <div className="resultado">
                            {(buscar("actualizado").respuesta === "No" || buscar("actualizado").respuesta === "No lo sé") ? <p><div>¡Cuidado! Tu dispositivo se encuentra desactualizado.</div>
                                                                 <button className="popup" onClick={()=>this.popUp("1")}> Ver consejo de buenas prácticas de seguridad
                                                                    <span className="popuptext" id="1">Debes actualizar tu dispositivo cuanto antes</span>
                                                                </button></p> : ""}

                            {vulnerabilidades[0] === 0 ? <p>No se han encontrado vulnerabilidades en este apartado</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>Comunicaciones</h3>
                        </div>
                        <div className="resultado">
                            {buscar("coms").respuesta.includes("RFID") ? <p><div>¡Cuidado! Tu dispositivo emplea el protocolo de comunicación RFID, el cuál resulta muy inseguro ante ataques físicos y a las etiquetas que utilizan.</div>
                                                                </p> : ""}
                            {(buscar("seguridad").respuesta === "Ninguno" || buscar("seguridad").respuesta === "No lo sé")? <p><div>¡Cuidado! Tu dispositivo no cuenta con protocolos de seguridad, la información que envías y que recibes puede estar en peligro y ser obtenida por terceras personas.</div></p> : ""}
                            {buscar("directamente").respuesta === "Directamente" ? <p><div>¡Cuidado! Te en cuenta que tu dispositivo se conecta directamente a la red de tu hogar por lo que es más probable que sea objetivo de ataques que buscan infiltrarse en tu red.</div></p> : ""}
                            {vulnerabilidades[1] === 0 ? <p>No se han encontrado vulnerabilidades en este apartado</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>Categoría</h3>
                        </div>
                        <div className="resultado">
                            {(buscar("categoria").respuesta === "Salud y bienestar") || (buscar("categoria").respuesta === "Interfaz máquina humano") || (buscar("categoria").respuesta ==="Seguridad") || (buscar("categoria").respuesta ==="Sensores") ? <p className="ultimo">¡Cuidado! Tu dispositivo trata directamente con datos sensibles. La categoría {buscar("categoria").respuesta} está formada por un conjunto de dispositivos que tratan con información sensible y tu privacidad puede verse puesta en peligro.</p> : ""}
                            {vulnerabilidades[2] === 0 ? <p>No se han encontrado vulnerabilidades en este apartado</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>Tratamiento de datos</h3>
                        </div>
                        <div className="resultado">
                        {buscar("envnube").respuesta === "Sí" ? <p><div>¡Cuidado! Ten en cuenta que tu dispositivo envía datos a la nube por lo que trata de darle al dispositivo la información estrictamente necesaria para su funcionamiento.</div>
                                                                <button className="popup" onClick={()=>this.popUp("8")}> Ver consejo de buenas prácticas de seguridad
                                                                    <span className="popuptext" id="8">Revisa los ajustes de privacidad de tu dispositivo para comprobar que datos está enviando a la nube</span>
                                                                </button></p> : ""}
                        {vulnerabilidades[3] === 0 ? <p>No se han encontrado vulnerabilidades en este apartado</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>Interfaz física</h3>
                        </div>
                        <div className="resultado">
                            {buscar("entradas").length !==0 ?
                                <>{buscar("entradas").respuesta.includes("USB") ? <p><div>¡Cuidado! El protocolo USB es muy vulnerable si un atacante consigue insertar una memoria USB infectada en tu dispositivo.</div>
                                                                                        <button className="popup" onClick={()=>this.popUp("10")}> Ver consejo de buenas prácticas de seguridad
                                                                                            <span className="popuptext" id="10">No permitas que nadie desconocido inserte una memoria USB en tu dispositivo</span>
                                                                                        </button></p> : ""}</>
                                :<></>}
                            {buscar("microcam").length !==0 ?
                                <>{buscar("microcam").respuesta.includes("Cámara") ? <p><div>¡Cuidado! Tu dispositivo cuenta con una cámara. Si un atacante se hace con el poder de tu dispositivo puede obtener imágenes y vídeos tuyos y de tu hogar sin que te des cuenta.</div>
                                    <button className="popup" onClick={()=>this.popUp("12")}> Ver consejo de buenas prácticas de seguridad
                                        <span className="popuptext" id="12">Cubre la cámara o apaga el dispositivo cuando no necesites de su uso</span>
                                    </button></p> : ""}</>
                                :<></>}
                            {buscar("microcam").length !==0 ?
                                <>{buscar("microcam").respuesta.includes("Micrófono") ? <p><div>¡Cuidado! Tu dispositivo cuenta con un micrófono. Un atacante podría obtener audios que recoje el micrófono donde puede haber información privada. Además, si el dispositivo cuenta con reconocimiento por voz, el atacante podría ejecutar órdenes sobre este.</div>
                                    <button className="popup" onClick={()=>this.popUp("12.5")}> Ver consejo de buenas prácticas de seguridad
                                        <span className="popuptext" id="12.5">Silencia el dispositivo o apágalo cuando no necesites de su uso. No situes otros dispositivos que reproduzcan audio cerca de tu dispositivo.</span>
                                    </button></p>: ""}</>
                                :<></>}
                            {buscar("actuadores").length !==0 ?
                                <>{buscar("actuadores").respuesta === "Sí" ? <p><div>¡Cuidado! Tu dispositivo tiene actuadores. Si un atacante toma el control del dispositivo, podrá ejectutar órdenes no deseadas sobre estos actuadores</div></p> : ""}</>
                                :<></>}
                            {vulnerabilidades[4] === 0 ? <p>No se han encontrado vulnerabilidades en este apartado</p>:""}
                        </div>
                    </div>
                    <div className="conjunto">
                        <div className="fase">
                            <h3>Accesibilidad</h3>
                        </div>
                        <div className="resultado">
                            {buscar("remoto").length !==0 ?
                                <>{buscar("remoto").respuesta === "Sí" ? <p><div>¡Cuidado! Tu dispositivo es accesible de manera remota, por lo que un atacante podría llegar a controlar tu dispositivo a distancia.</div>
                                    <button className="popup" onClick={()=>this.popUp("15")}> Ver consejo de buenas prácticas de seguridad
                                        <span className="popuptext" id="15">Si es posible, desactiva el acceso remoto en caso de que no vayas a utilizarlo.</span>
                                    </button></p> : ""}</>
                                :<></>}
                            {buscar("dobleaut").length !==0 ?
                                <>{buscar("dobleaut").respuesta === "No" ? <p><div>¡Cuidado! Tu dispositivo no cuenta con factor de doble autenticación. Este es una barrera para frenar a un atacante que se haga con tus credenciales de acceso.</div>
                                    <button className="popup" onClick={()=>this.popUp("16")}> Ver consejo de buenas prácticas de seguridad
                                        <span className="popuptext" id="16">Si es posible, actívalo en los ajustes de tu dispositivo.</span>
                                    </button></p> : ""}</>:<></>}
                            {buscar("opensource").length !==0 ?
                                <>{buscar("opensource").respuesta === "No" ? <p><div>¡Cuidado! La app de tu dispositivo no está basada en open source. Las aplicaciones de código abierto están respaldas por la comunidad y es más improbable encontrar en ellas fallos de seguridad.</div></p> : ""}</>:<></>}
                            {buscar("web").length !==0 ?
                                <>{buscar("web").respuesta === "Sí, pero no utiliza HTTPS" ? <p><div>¡Cuidado! Las web que no utilizan el protocolo HTTPS son muy vulnerables hoy en día.</div>
                                    <button className="popup" onClick={()=>this.popUp("18")}> Ver consejo de buenas prácticas de seguridad
                                        <span className="popuptext" id="18">Evita acceder via web a la aplicación en la medida de lo posible</span>
                                    </button></p> : ""}</>:<></>}
                            {vulnerabilidades[5] === 0 ? <p>No se han encontrado vulnerabilidades en este apartado</p>:""}
                        </div>
                    </div>
                </div>
                 
                </div>
                </>  
            </div>
        )
	}

    popUp = (index) => {
        var popup = document.getElementById(index);
        popup.classList.toggle("show");
      }
}