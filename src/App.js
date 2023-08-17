import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg/MiOrg";
import Formulario from "./components/formulario/Formulario";
import Equipo from "./components/Equipo/Equipo";

//en la linea 9 al poner la funcion header en {}
// se da a entender que es un elemento de JS
// pero se puede dejar como <Header/> y asi se llaman los
//elementos de js a react
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([]);
  //Ternario  --> condicion ? seMuestra caso contrario : noSeMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    // spread operator - copia de valores actuales y se le agrega el colaborador
    //los 3p puntos hacen referencia a que esta copiando un elemento
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Lista de equpos
  const equipos = [
    //abrimos un objeto para lograr llamar colores y demas
    //desde react
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#D9f7e9",
    },
    {
      titulo: "Front end",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf",
    },
  ];

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <div></div>} */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {/* se usa el .map para recorrer una lista
      pero siempre que se trabaja con map, debe traer una key*/}
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
        />
      ))}
    </div>
  );
}

export default App;
