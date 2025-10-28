import React from "react";

const Home = () => {

		const[seleccionarColor, setSeleccionarColor]=useState("rojo");

		
	return (
		<div className="semaforo">
			<div 
				onClick={() => setSeleccionarColor("rojo")}
				className={"light rojo"+((seleccionarColor === "rojo") ? "encendido" : "")}>
			</div>
			<div 
				onClick={() => setSeleccionarColor("amarillo")}
				className={"light amarillo"+((seleccionarColor === "amarillo") ? "encendido" : "")}>

			</div>
			<div 
				onClick={() => setSeleccionarColor("verde")}
				className={"light verde"+((seleccionarColor === "verde") ? "encendido" : "")}>
			</div>
		</div>
	);
};

export default Home;