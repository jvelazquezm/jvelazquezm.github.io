import React from 'react';

export default class Resultados extends React.Component {
	render() {
        const {revisar,buscar} = this.props;
        return (
            <div className="resultados2" >
                    <h1 className="h1res">Respuestas</h1>
                <div className="conjunto1">
                    <div className="fase">
                        <h3>Firmware</h3>
                    </div>
                    <div className="resultado">
                        {/* <p>Descripción: <button className="cambiar" onClick={()=> revisar(1)}>{buscar(1).respuesta}.</button></p> */}
                        <p>El firmware <button className="cambiar" onClick={()=> revisar("actualizado")}>{buscar("actualizado").respuesta === "Sí" ? "sí" : "no"}</button> está actualizado.</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>Comunicaciones</h3>
                    </div>
                    <div className="resultado">
                    <p>Protocolos de comunicación empleados: <button className="cambiar" onClick={()=> revisar("coms")}>{buscar("coms").respuesta.join(", ")}.</button></p>
                    {/* <p>Los protocolos de red y transporte que utiliza son: <button className="cambiar" onClick={()=> revisar(4)}>{buscar(4).respuesta}.</button></p> */}
                    <p>Protocolos de seguridad asociados: <button className="cambiar" onClick={()=> revisar("seguridad")}>{buscar("seguridad").respuesta}.</button></p>
                    <p>El dispositivo se conecta <button className="cambiar" onClick={()=> revisar("directamente")}>{buscar("directamente").respuesta === "Directamente" ? "" : "in"}directamente</button> a la red.</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>Categoría</h3>
                    </div>
                    <div className="resultado">
                        <p>{buscar("categoria").respuesta}</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>Tratamiento de datos</h3>
                    </div>
                    <div className="resultado">
                    <p>El dispositivo {buscar("conexnube").respuesta === "No" ? <button className="cambiar" onClick={()=> revisar("conexnube")}>no está conectado a la nube</button> : buscar("envnube").respuesta === "Sí" ? <><button className="cambiar" onClick={()=> revisar("conexnube")}>está conectado a la nube</button> <button className="cambiar" onClick={()=> revisar("envnube")}>y envía datos a esta</button></>: <><button className="cambiar" onClick={()=> revisar("conexnube")}>está conectado a la nube</button> <button className="cambiar" onClick={()=> revisar("envnube")}>pero no envía datos a esta</button></>}.</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>Interfaz física</h3>
                    </div>
                    <div className="resultado">
                        {(buscar("entradas").length !==0 && (buscar("entradas").respuesta.length !== 0 )) ?
                        <p>Entradas físicas del dispositivo: <button className="cambiar" onClick={()=> revisar("entradas")}>{buscar("entradas").respuesta.join(", ")}.</button></p>
                        : <p>El dispositivo <button className="cambiar" onClick={()=> revisar("entradas")}>no tiene</button> entradas físicas.</p>}

                        {buscar("sensores").length !==0 ?
                        <><p>El dispositivo <button className="cambiar" onClick={()=> revisar("sensores")}>{buscar("sensores").respuesta === "Sí" ? "":"no"} tiene sensores</button>.</p>
                        {(buscar("microcam").length !==0) ?
                            <p>Entre ellos tiene: <button className="cambiar" onClick={()=> revisar("microcam")}>{buscar("microcam").respuesta.join(", ")}.</button></p> 
                            : <></>}
                            </> 
                        : <p>El dispositivo <button className="cambiar" onClick={()=> revisar("sensores")}>no tiene</button> sensores.</p>}

                        {buscar("actuadores").length !==0 ?
                        <p>El dispositivo <button className="cambiar" onClick={()=> revisar("actuadores")}>{buscar("actuadores").respuesta === "Sí" ? "":"no"} tiene actuadores</button>.</p> 
                        : <p>El dispositivo <button className="cambiar" onClick={()=> revisar("actuadores")}>no tiene</button> actuadores</p>}
                        {(buscar("boton").length !==0 && (buscar("boton").respuesta.length !== 0 )) ?
                        <p>Botones físicos: <button className="cambiar" onClick={()=> revisar("boton")}>{buscar("boton").respuesta.join(", ")}.</button></p> 
                        : <p><button className="cambiar" onClick={()=> revisar("boton")}>El disposivo no cuenta con botones físicos.</button></p>}
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>Accesibilidad</h3>
                    </div>
                    <div className="resultado">
                        {buscar("remoto").length !==0 ?
                        <><p><button className="cambiar" onClick={()=> revisar("remoto")}>{buscar("remoto").respuesta === "Sí" ? "Se":"No se"} puede</button> acceder remontamente al dispositivo a través de una aplicación.</p>
                        {buscar("remoto").respuesta === "Sí" ?  
                        <>
                            {buscar("dobleaut").length !==0 ?
                            <p>El dispositivo <button className="cambiar" onClick={()=> revisar("dobleaut")}>{buscar("dobleaut").respuesta === "Sí" ? "":"no"} cuenta</button> con factor de doble autenticación</p> 
                            : <></>}
                            {buscar("opensource").length !==0 ?
                            <p>La aplicación <button className="cambiar" onClick={()=> revisar("opensource")}>{buscar("opensource").respuesta === "Sí" ? "":"no"} está</button> basada en open source.</p> 
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