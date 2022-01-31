export default function Pregunta(props) {
	
	return <div className="pregunta">
		<div className="titulo">Pregunta {props.index +1}</div>
		<div className="question">{props.pregunta}</div>
	</div>
}