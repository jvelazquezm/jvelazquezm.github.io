import React from 'react';



export default class Presentacion extends React.Component {
	render() {
        const bienvenido = "In the next application you will be able to assess the vulnerabilities of your IoT device through a simple questionnaire that will ask you about some characteristics of your device. Click on the button to start."
        return <>
        <div className="cuerpo">
            <div className="presentacion">
                <h2 className="bienvenido">Welcome!</h2>
                <div className="descripcion">
                    {bienvenido}
                </div>

            </div>
        </div>
        </>
}
}