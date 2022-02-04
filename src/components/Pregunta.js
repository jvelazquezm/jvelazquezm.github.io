import React from 'react' ;
import help from '../assets/question-circle-solid.svg'

export default class Pregunta extends React.Component {
	
	render(){
		const {pregunta,index, ayuda} = this.props;
		return <div className="pregunta">
		{/* <div className="titulo">Pregunta {props.index +1}</div> */}
		<div className="question">{pregunta}
		
		{ (ayuda !== undefined)  ?
			<button className="popup3" onClick={()=>this.popUp(pregunta)}>
				<img src={help}/>
				<span className="popuptext" id={pregunta}>{ayuda}</span>
			</button>
			: <></>
		}
		</div>

	</div>
	

	}
	popUp = (index) => {
        var popup = document.getElementById(index);
        popup.classList.toggle("show");
      }
}