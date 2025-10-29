import React, { useState } from "react";


const Home = () => {
	const [seleccionarColor, setSeleccionarColor] = useState("rojo");
	const [mostrarNuevoColor, setmostrarNuevoColor] = useState(false)
	const añadirColor = () => {
		setmostrarNuevoColor(colorPrevio=>!colorPrevio);
	};

	return (
		<div className="container">
			<div className="semaforo">
				<div
					onClick={() => setSeleccionarColor("rojo")}
					className={"light rojo" + ((seleccionarColor === "rojo") ? " encendido" : "")}>
				</div>
				<div
					onClick={() => setSeleccionarColor("amarillo")}
					className={"light amarillo" + ((seleccionarColor === "amarillo") ? " encendido" : "")}>
				</div>
				<div
					onClick={() => setSeleccionarColor("verde")}
					className={"light verde" + ((seleccionarColor === "verde") ? " encendido" : "")}>
				</div>
				{mostrarNuevoColor && (
				<div
					onClick={() => setSeleccionarColor("nuevo")}
					className={"light nuevo" + (seleccionarColor === "nuevo" ? " encendido" : "")}>
				</div>
				)}
					
			</div>
			<button onClick={añadirColor} className="boton d-grid gap-2 col-6 mx-auto">
			{mostrarNuevoColor ? "Ocultar color" : "Añadir color AQUÍ"}
			</button>
			</div>

	);
};

export default Home;