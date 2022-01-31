import React from 'react';



export default class Presentacion extends React.Component {
	render() {
	
        return <>
        <div className="cuerpo">
            <div className="presentacion">
                <h2 className="bienvenido">¡Bienvenido!</h2>
                <div className="descripcion">
                    En la siguiente aplicación vas a poder comprobar que vulnerabilidades tiene tu dispositivo IoT a través de un sencillo cuestionario que te preguntará por algunas características de tu dispositivo. Pulsa en el botón para comenzar.
                </div>

            </div>
        </div>
        </>
}
}