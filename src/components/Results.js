import React from 'react';
//import ReactToPrint from 'react-to-print';
//import PrintResultados from './PrintResultados';

export default class Results extends React.Component {
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
                        <p>The firmware <button className="cambiar" onClick={()=> revisar("actualizado")}>{buscar("actualizado").respuesta === buscar("actualizado").opciones[0] ? "is updated" : "is out of date"}</button>.</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>{titulos[1]}</h3>
                    </div>
                    <div className="resultado">
                    <p>Communication protocols used: <button className="cambiar" onClick={()=> revisar("coms")}>{buscar("coms").respuesta.join(", ")}.</button></p>
                    {/* <p>Los protocolos de red y transporte que utiliza son: <button className="cambiar" onClick={()=> revisar(4)}>{buscar(4).respuesta}.</button></p> */}
                    <p>Security protocols: <button className="cambiar" onClick={()=> revisar("seguridad")}>{buscar("seguridad").respuesta}.</button></p>
                    <p>The device is connected <button className="cambiar" onClick={()=> revisar("directamente")}>{buscar("directamente").respuesta === buscar("directamente").opciones[0] ? "" : "in"}directly</button> to the network.</p>
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
                    <p>The device {buscar("conexnube").respuesta === buscar("conexnube").opciones[1] ? <button className="cambiar" onClick={()=> revisar("conexnube")}>is not connected to the cloud</button> : buscar("envnube").respuesta === buscar("envnube").opciones[0] ? <><button className="cambiar" onClick={()=> revisar("conexnube")}>is connected to the cloud</button> <button className="cambiar" onClick={()=> revisar("envnube")}>and sends data to it</button></>: <><button className="cambiar" onClick={()=> revisar("conexnube")}>is connected to the cloud</button> <button className="cambiar" onClick={()=> revisar("envnube")}>but does not sends data to it</button></>}.</p>
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>{titulos[4]}</h3>
                    </div>
                    <div className="resultado">
                        {(buscar("entradas").length !==0 && (buscar("entradas").respuesta.length !== 0 )) ?
                        <p>Physical interfaces of the device: <button className="cambiar" onClick={()=> revisar("entradas")}>{buscar("entradas").respuesta.join(", ")}.</button></p>
                        : <p>The device <button className="cambiar" onClick={()=> revisar("entradas")}>does not have</button> physical interfaces.</p>}

                        {buscar("sensores").length !==0 ?
                        <><p>The device <button className="cambiar" onClick={()=> revisar("sensores")}>{buscar("sensores").respuesta === buscar("sensores").opciones[0] ? "":"does not"} have sensors</button>.</p>
                        {(buscar("microcam").length !==0) ?
                            <p>Among them, it has: <button className="cambiar" onClick={()=> revisar("microcam")}>{buscar("microcam").respuesta.join(", ")}.</button></p> 
                            : <></>}
                            </> 
                        : <p>The device <button className="cambiar" onClick={()=> revisar("sensores")}>does not have</button> sensors.</p>}

                        {buscar("actuadores").length !==0 ?
                        <p>The device <button className="cambiar" onClick={()=> revisar("actuadores")}>{buscar("actuadores").respuesta === buscar("actuadores").opciones[0] ? "":"does not"} have actuators</button>.</p> 
                        : <p>The device <button className="cambiar" onClick={()=> revisar("actuadores")}>does not have</button> actuadors</p>}
                        {(buscar("boton").length !==0 && (buscar("boton").respuesta.length !== 0 )) ?
                        <p>Physical buttons: <button className="cambiar" onClick={()=> revisar("boton")}>{buscar("boton").respuesta.join(", ")}.</button></p> 
                        : <p><button className="cambiar" onClick={()=> revisar("boton")}>The device does not have physical buttons.</button></p>}
                    </div>
                </div>
                <div className="conjunto">
                    <div className="fase">
                        <h3>{titulos[5]}</h3>
                    </div>
                    <div className="resultado">
                        {buscar("remoto").length !==0 ?
                        <><p>The device <button className="cambiar" onClick={()=> revisar("remoto")}>{buscar("remoto").respuesta === buscar("remoto").opciones[0] ? "is":"is not"}</button>  remotely accessible via an application.</p>
                        {buscar("remoto").respuesta === buscar("remoto").opciones[0] ?  
                        <>
                            {buscar("dobleaut").length !==0 ?
                            <p>The device <button className="cambiar" onClick={()=> revisar("dobleaut")}>{buscar("dobleaut").respuesta === buscar("dobleaut").opciones[0] ? "has":"does not have"}</button> two-factor authentication.</p> 
                            : <></>}
                            {buscar("opensource").length !==0 ?
                            <p>The application is <button className="cambiar" onClick={()=> revisar("opensource")}>{buscar("opensource").respuesta === buscar("opensource").opciones[0] ? "":"not"} open-source based</button>.</p> 
                            : <></>}
                            {(buscar("web").length !==0 && buscar("web").respuesta.length !== 0) ?
                            <p>Web accesibility: <button className="cambiar" onClick={()=> revisar("web")}>{buscar("web").respuesta}.</button></p> 
                            : <p><button className="cambiar" onClick={()=> revisar("web")}>The application is not accesible via web.</button></p>}</>:""}
                        </> 
                        : <p>The device <button className="cambiar" onClick={()=> revisar("remoto")}>is not</button> remotely accessible via an application.</p>}

                    </div>
                </div>                
            </div>
        )
	}
}