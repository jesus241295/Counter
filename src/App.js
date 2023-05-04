import Logo from "./imagenes/Logomarker.png";
import Boton from "./components/Boton";
import "./App.css";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);
  const manejarBoton = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={Logo}
          alt="logo de freecodecamp"
        />
      </div>

      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarBoton} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
