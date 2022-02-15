import React from 'react';
//import ReactToPrint from 'react-to-print';
//import PrintResultados from './PrintResultados';

export default class Resultados extends React.Component {
	render() {
        const {revisar,buscar,titulos} = this.props;
        return (
            <div className="resultados" >
                {/* <div style={{display: "none"}}>
                    <PrintResultados 
                        ref={el => (this.componentRef = el)}
                        revisar={revisar}
                        buscar={buscar}
                    />
                    </div> */}
                {/* <div className="print">
                    
                    <ReactToPrint
                        trigger={() => {
                        // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                        // to the root node of the returned component as it will be overwritten.
                        return <a className="imprimir" href="#">Imprimir resultados</a>;
                        }}
                        content={() => this.componentRef}
                    />
                </div> */}

                <div className="conjunto">
                    <div className="fase">
                        <h3>{titulos[0]}</h3>
                    </div>
                    <div className="resultado">
                        {/* <p>Descripción: <button className="cambiar" onClick={()=> revisar(1)}>{buscar(1).respuesta}.</button></p> */}
                        <p>El firmware <button className="cambiar" onClick={()=> revisar("actualizado")}>{buscar("actualizado").respuesta === buscar("actualizado").opciones[0] ? "sí" : "no"}</button> está actualizado.</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>{titulos[1]}</h3>
                    </div>
                    <div className="resultado">
                    <p>Protocolos de comunicación empleados: <button className="cambiar" onClick={()=> revisar("coms")}>{buscar("coms").respuesta.join(", ")}.</button></p>
                    {/* <p>Los protocolos de red y transporte que utiliza son: <button className="cambiar" onClick={()=> revisar(4)}>{buscar(4).respuesta}.</button></p> */}
                    <p>Protocolos de seguridad asociados: <button className="cambiar" onClick={()=> revisar("seguridad")}>{buscar("seguridad").respuesta}.</button></p>
                    <p>El dispositivo se conecta <button className="cambiar" onClick={()=> revisar("directamente")}>{buscar("directamente").respuesta === buscar("directamente").opciones[0] ? "" : "in"}directamente</button> a la red.</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>{titulos[2]}</h3>
                    </div>
                    <div className="resultado">
                        <p>{buscar("categoria").respuesta}</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>{titulos[3]}</h3>
                    </div>
                    <div className="resultado">
                    <p>El dispositivo {buscar("conexnube").respuesta === buscar("conexnube").opciones[1] ? <button className="cambiar" onClick={()=> revisar("conexnube")}>no está conectado a la nube</button> : buscar("envnube").respuesta === buscar("envnube").opciones[0] ? <><button className="cambiar" onClick={()=> revisar("conexnube")}>está conectado a la nube</button> <button className="cambiar" onClick={()=> revisar("envnube")}>y envía datos a esta</button></>: <><button className="cambiar" onClick={()=> revisar("conexnube")}>está conectado a la nube</button> <button className="cambiar" onClick={()=> revisar("envnube")}>pero no envía datos a esta</button></>}.</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>{titulos[4]}</h3>
                    </div>
                    <div className="resultado">
                        {(buscar("entradas").length !==0 && (buscar("entradas").respuesta.length !== 0 )) ?
                        <p>Entradas físicas del dispositivo: <button className="cambiar" onClick={()=> revisar("entradas")}>{buscar("entradas").respuesta.join(", ")}.</button></p>
                        : <p>El dispositivo <button className="cambiar" onClick={()=> revisar("entradas")}>no tiene</button> entradas físicas.</p>}

                        {buscar("sensores").length !==0 ?
                        <><p>El dispositivo <button className="cambiar" onClick={()=> revisar("sensores")}>{buscar("sensores").respuesta === buscar("sensores").opciones[0] ? "":"no"} tiene sensores</button>.</p>
                        {(buscar("microcam").length !==0) ?
                            <p>Entre ellos tiene: <button className="cambiar" onClick={()=> revisar("microcam")}>{buscar("microcam").respuesta.join(", ")}.</button></p> 
                            : <></>}
                            </> 
                        : <p>El dispositivo <button className="cambiar" onClick={()=> revisar("sensores")}>no tiene</button> sensores.</p>}

                        {buscar("actuadores").length !==0 ?
                        <p>El dispositivo <button className="cambiar" onClick={()=> revisar("actuadores")}>{buscar("actuadores").respuesta === buscar("actuadores").opciones[0] ? "":"no"} tiene actuadores</button>.</p> 
                        : <p>El dispositivo <button className="cambiar" onClick={()=> revisar("actuadores")}>no tiene</button> actuadores</p>}
                        {(buscar("boton").length !==0 && (buscar("boton").respuesta.length !== 0 )) ?
                        <p>Botones físicos: <button className="cambiar" onClick={()=> revisar("boton")}>{buscar("boton").respuesta.join(", ")}.</button></p> 
                        : <p><button className="cambiar" onClick={()=> revisar("boton")}>El disposivo no cuenta con botones físicos.</button></p>}
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>{titulos[5]}</h3>
                    </div>
                    <div className="resultado">
                        {buscar("remoto").length !==0 ?
                        <><p><button className="cambiar" onClick={()=> revisar("remoto")}>{buscar("remoto").respuesta === buscar("remoto").opciones[0] ? "Se":"No se"} puede</button> acceder remontamente al dispositivo a través de una aplicación.</p>
                        {buscar("remoto").respuesta === buscar("remoto").opciones[0] ?  
                        <>
                            {buscar("dobleaut").length !==0 ?
                            <p>El dispositivo <button className="cambiar" onClick={()=> revisar("dobleaut")}>{buscar("dobleaut").respuesta === buscar("dobleaut").opciones[0] ? "":"no"} cuenta</button> con factor de doble autenticación</p> 
                            : <></>}
                            {buscar("opensource").length !==0 ?
                            <p>La aplicación <button className="cambiar" onClick={()=> revisar("opensource")}>{buscar("opensource").respuesta === buscar("opensource").opciones[0] ? "":"no"} está</button> basada en open source.</p> 
                            : <></>}
                            {(buscar("web").length !==0 && buscar("web").respuesta.length !== 0) ?
                            <p>Accesibilidad web: <button className="cambiar" onClick={()=> revisar("web")}>{buscar("web").respuesta}.</button></p> 
                            : <p><button className="cambiar" onClick={()=> revisar("web")}>La aplicación no es accesible vía web</button></p>}</>:""}
                        </> 
                        : <p>El dispositivo <button className="cambiar" onClick={()=> revisar("remoto")}>no tiene</button> acceso remoto a través de una aplicación.</p>}

                    </div>
                </div>                
            </div>
        )
	}
}