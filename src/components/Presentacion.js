import React from 'react';



export default class Presentacion extends React.Component {
	render() {
        const bienvenido = "En la siguiente aplicación vas a poder comprobar que vulnerabilidades tiene tu dispositivo IoT a través de un sencillo cuestionario que te preguntará por algunas características de tu dispositivo. Pulsa en el botón para comenzar."
        return <>
        <div className="cuerpo">
            <div className="presentacion">
                <h2 className="bienvenido">¡Bienvenido!</h2>
                <div className="descripcion">
                    {bienvenido}
                </div>

            </div>
        </div>
        </>
}
}